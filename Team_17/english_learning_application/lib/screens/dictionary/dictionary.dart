import 'package:flutter/material.dart';
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
//        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//    padding: EdgeInsets.all(10.0),
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

class _DictionaryResultState extends State<DictionaryResult> {
  _DictionaryResultState(this.controller);
  final controller;
  List result = [];
//  TextEditingController _controller = TextEditingController();
  // Timer _debounce;
  bool isLoading = false;
  String _notFound = 'This word is not found';

  void translateToEnglish() async {
    result = [];
    setState(() {
      isLoading = true;
    });

    final translator = new GoogleTranslator();
    translator.translate(controller.text, from: 'vi',to: 'en').then((s){
      result.add(s);
      setState(() {
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
          isLoading = false;
        });
      });
    }
    else{
      translator.translate(controller.text, from: 'en',to: 'vi').then((s){
        result.add(s);
        setState(() {
          isLoading = false;
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
                      onPressed: () => translateToEnglish(),
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
                      onPressed: () => translateToVietNamese(),
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
                ListView.builder(
                  itemCount: result.length,
                  itemBuilder: (context, index) {
                    if(result.length < 3){
                      if(index == 0) return ListTile(
                        title: Text(result[index]),
                      );
                      return null;
                    }
                    else{
                      if(index == 0){
                        return SizedBox(
                          height: 50.0,
                          child: ListTile(
                            title: Text('${result[0]}', style: TextStyle(fontSize: 25.0, fontWeight: FontWeight.w600)),
                          ),
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
                            onPressed: null),
                        IconButton(
                          icon: Icon(Icons.volume_up),
                          onPressed: null,
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




//      ListView.builder(
//        itemCount: result.length,
//        itemBuilder: (context, index) {
//          return Card(
//            child: ListTile(
//              title: Text(removeTagHTML('${result[index]['en']}')),
//              subtitle: Text('${result[index]['vi']}'),
//            ),
//          );
//        },
//      );
    }
  }
}
