import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_tts/flutter_tts.dart';

class WordDetail extends StatelessWidget {
  final FlutterTts flutterTts = FlutterTts();

  @override
  Widget build(BuildContext context) {
    WordNotifier wordNotifier = Provider.of<WordNotifier>(context); // nút voice

    //nút voice
    Future _speak(String text) async {
      await flutterTts.setLanguage("en-US");
      await flutterTts.setPitch(1);
      print(await flutterTts.getVoices);
      await flutterTts.speak(text);
      // nút voice
    }



    return Scaffold(
      appBar: AppBar(
        title: Text(wordNotifier.currentWord.name),
      ),
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Center(
          child: Container(
            child: Column(
              children: <Widget>[
                SizedBox(height: 20),
                Text(
                  wordNotifier.currentWord.name,
                  style: TextStyle(
                    color: Colors.blue,
                    fontWeight: FontWeight.bold,
                    fontSize: 40,
                  ),
                ),
                // nut voice
                SizedBox(height: 5),
                Padding(
                  padding: const EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 0.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      IconButton(
                        icon: Icon(Icons.volume_up),
                        onPressed: () => _speak(wordNotifier.currentWord.name),
                      ),
                      Text('${wordNotifier.currentWord.spelling}'),
                    ],
                  ),
                ),
                // hết nút voice
                SizedBox(height: 20),
                Text(
                  '${wordNotifier.currentWord.category}',
                  style: TextStyle(fontSize: 24),
                ),
                Image.network(
                  wordNotifier.currentWord.image != null
                      ? wordNotifier.currentWord.image
                      : 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg',
                  width: 200,
                  height: 250,
                  fit: BoxFit.fitWidth,
                ),

                Padding(
                  padding: const EdgeInsets.fromLTRB(0.0, 0.0, 340.0, 0.0),
                  child: Container(
                    color: Colors.grey,
                    child: Text(
                      "Ví dụ",
                      style: TextStyle(fontSize: 20),
                    ),
                    width: 50,
                    height: 25,

                    // shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0)),
                  ),
                ),

                ListView(
                  shrinkWrap: true,
                  scrollDirection: Axis.vertical,
                  padding: EdgeInsets.all(8),
                  children: wordNotifier.currentWord.subIngredients
                      .map(
                        (ingredient) => Card(
                          color: Colors.white,
                          child: Center(
                            child: Text(
                              ingredient,
                              style:
                                  TextStyle(color: Colors.black, fontSize: 24),
                            ),
                          ),
                        ),
                      )
                      .toList(),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
