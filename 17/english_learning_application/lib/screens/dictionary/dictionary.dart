import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:html/parser.dart';
// import 'dart:async';
import 'package:englishlearningapplication/services/word_search.dart';
import 'package:translator/translator.dart';

class Dictionary extends StatelessWidget{
  TextEditingController _controller = TextEditingController();
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text('Từ điển Anh - Việt'),
        backgroundColor: Colors.green[700],
        elevation: 0,
      ),
      body: Padding(
        padding: EdgeInsets.all(10.0),
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 170.0,
              child: TextFormField(
                maxLines: 10,
                autofocus: true,
                controller: _controller,
                decoration: InputDecoration(border: OutlineInputBorder()),
              ),
            ),
            DictionaryResult(_controller)
          ],
        ),
      ),
    );
  }

}
class DictionaryResult extends StatefulWidget {
  DictionaryResult(this.controller);
  TextEditingController controller;
  @override
  _DictionaryResultState createState() => _DictionaryResultState(controller);
}

enum TtsState { playing, stopped }
class _DictionaryResultState extends State<DictionaryResult> {
  _DictionaryResultState(this.controller);
  final controller;
  List result = [];
  bool isLoading = false;
  String _notFound = 'This word is not found';

  FlutterTts flutterTts;
  dynamic languages;
  double volume = 0.5;
  double pitch = 1.0;
  double rate = 0.5;

  String _newVoiceText;

  TtsState ttsState = TtsState.stopped;

  get isPlaying => ttsState == TtsState.playing;

  get isStopped => ttsState == TtsState.stopped;

  @override
  initState() {
    super.initState();
    initTts();
  }

  initTts() {
    flutterTts = FlutterTts();
    flutterTts.setStartHandler(() {
      setState(() {
        print("playing");
        ttsState = TtsState.playing;
      });
    });

    flutterTts.setCompletionHandler(() {
      setState(() {
        print("Complete");
        ttsState = TtsState.stopped;
      });
    });

    flutterTts.setErrorHandler((msg) {
      setState(() {
        print("error: $msg");
        ttsState = TtsState.stopped;
      });
    });
  }

  Future _speak() async {
    await flutterTts.setVolume(volume);
    await flutterTts.setSpeechRate(rate);
    await flutterTts.setPitch(pitch);

    if(ttsState == TtsState.stopped){
      if (_newVoiceText != null) {
        if (_newVoiceText.isNotEmpty) {
          var result = await flutterTts.speak(_newVoiceText);
          if (result == 1) setState(() => ttsState = TtsState.playing);
        }
      }
    }
    else{
      _stop();
    }
  }

  Future _stop() async {
    var result = await flutterTts.stop();
    if (result == 1) setState(() => ttsState = TtsState.stopped);
  }

  @override
  void dispose() {
    super.dispose();
    flutterTts.stop();
  }


  void translateToEnglish() async {
    result = [];
    setState(() {
      isLoading = true;
    });

    final translator = new GoogleTranslator();
    translator.translate(controller.text, from: 'vi',to: 'en').then((s){
      result.add(s);

      setState(() {
        languages = flutterTts.setLanguage("en");
        _newVoiceText = result[0];
        isLoading = false;
      });
    });

  }

  void translateToVietNamese() async {
    result = [];
    final translator = new GoogleTranslator();
    setState(() {
      isLoading = true;
    });
    if(!controller.text.toString().contains(" ")){

      translator.translate(controller.text, from: 'en',to: 'vi').then((s){
        result.add(s);
        WordSearch instance = WordSearch(word: controller.text, lang: 'en');
        instance.getTranslate().then((x){
          for (int i = 1; i < instance.values.length; i++) {
            setState(() {
              result.add(instance.values[i]['fields']);
            });
          }
        });

        setState(() {
          languages = flutterTts.setLanguage("vi");
          isLoading = false;
          _newVoiceText = result[0];
        });
      });
    }
    else{
      translator.translate(controller.text, from: 'en',to: 'vi').then((s){
        result.add(s);
        setState(() {
          languages = flutterTts.setLanguage("vi");
          isLoading = false;
          _newVoiceText = result[0];
        });
      });
    }
  }

  String removeTagHTML(String htmlString) {
    var document = parse(htmlString);
    String parsedString = parse(document.body.text).documentElement.text;
    return parsedString;
  }


  @override
  Widget build(BuildContext context) {
    return buildResultView();
  }

  Widget buildResultView() {
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    } else {
      var buttonBar = SizedBox(
        height: 80,
        child: Container(
          margin: EdgeInsets.only(top: 10.0, bottom: 10.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Expanded(
                child: Container(
                  margin: EdgeInsets.only(right: 10.0),
                  child: ButtonTheme(
                    buttonColor: Colors.green,

//                    padding: EdgeInsets.only(top: 5.0, bottom: 5.0),
                    height: double.infinity,
                    child: RaisedButton(
                      textColor: Colors.white,
                      child: Text(
                        "VIỆT - ANH",
                        style: TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        translateToEnglish();
                        FocusScope.of(context).unfocus();
                      }
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  margin: EdgeInsets.only(left: 10.0),
                  child: ButtonTheme(
                    buttonColor: Colors.green,
//                    padding: EdgeInsets.only(top: 5.0, bottom: 5.0),
                    height: double.infinity,
                    child: RaisedButton(
                      textColor: Colors.white,
                      child: Text(
                        "ANH - VIỆT",
                        style: TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        translateToVietNamese();
                        FocusScope.of(context).unfocus();
                      }
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
      var resultView = Expanded(
        child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                  color: Color(0xFFFF7F7F7F),
                  style: BorderStyle.solid,
                  width: 1.0),
            ),
            child: Stack(
              children: <Widget>[
                SizedBox(
                  height: 50,
                  width: double.infinity,
                ),
                ListView.builder(
                  itemCount: result.length,
                  itemBuilder: (context, index) {
                    if(result.length == 1){
                      if(index == 0) return Padding(
                        padding: EdgeInsets.only(top: 30.0),
                        child: ListTile(
                          title: Text(result[index]),
                        ),
                      );
                      return null;
                    }
                    else{
                      if(index == 0){
                        return SizedBox(
                          height: 80.0,
                          child: Padding(
                            padding: EdgeInsets.only(top: 30.0),
                            child: ListTile(
                              title: Text('${result[0]}', style: TextStyle(fontSize: 25.0, fontWeight: FontWeight.w600)),
                            ),
                          )
                        );
                      }
                      else{
                        return ListTile(
                          title:
                          Text(removeTagHTML('${result[index]['en']}')),
                          subtitle: Text('${result[index]['vi']}'),
                        );
                      }
                    }
                  },
                ),
                Align(
                  alignment: Alignment.topRight,
                  child: Container(
                    height: 50.0,
                    width: 100.0,
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        IconButton(
                            icon: Icon(Icons.content_copy),
                            onPressed: () {
                              Clipboard.setData(new ClipboardData(text: result[0])).then((result) {
                                final snackBar = SnackBar(
                                  content: Text('Copied'),
                                  action: SnackBarAction(
                                    label: 'Undo',
                                    onPressed: () {},
                                  ),
                                );
                                Scaffold.of(context).showSnackBar(snackBar);
                              });;
                            }),
                        IconButton(
                          icon: Icon(Icons.volume_up),
                          onPressed: _speak,
                        )
                      ],
                    ),
                  ),
                ),
              ],
            )),
      );

      return Expanded(
        child: Column(
          children: <Widget>[
            buttonBar,
            resultView,
          ],
        ),
      );
    }
  }
}