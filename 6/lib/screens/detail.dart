import 'package:CWCFlutter/api/word_api.dart';
import 'package:CWCFlutter/model/word.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
//import 'package:flutter_tts/flutter_tts.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'word_form.dart';

class WordDetail extends StatelessWidget {
  final FlutterTts flutterTts = FlutterTts();
  @override
  Widget build(BuildContext context) {
    WordNotifier foodNotifier = Provider.of<WordNotifier>(context); // nút voice

    _onFoodDeleted(Food food) {
      Navigator.pop(context);
      foodNotifier.deleteFood(food);
    }

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
        title: Text(foodNotifier.currentFood.name),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Container(
            child: Column(
              children: <Widget>[
                Image.network(
                  foodNotifier.currentFood.image != null
                      ? foodNotifier.currentFood.image
                      : 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg',
                  width: MediaQuery.of(context).size.width,
                  height: 250,
                  fit: BoxFit.fitWidth,
                ),
                SizedBox(height: 24),
                Text(
                  foodNotifier.currentFood.name,
                  style: TextStyle(
                    fontSize: 40,
                  ),
                ),
                Text(
                  'translate: ${foodNotifier.currentFood.category}',
                  style: TextStyle(fontSize: 18, fontStyle: FontStyle.italic),
                ),
                SizedBox(height: 20),
                //nút voice
                
                FloatingActionButton(
                  heroTag: '',
                  onPressed: () =>_speak(foodNotifier.currentFood.name),
                  child: Icon(Icons.play_arrow),
                  foregroundColor: Colors.white,),
                // hết nút voice
                Text(
                  "desciption",
                  style: TextStyle(fontSize: 18, decoration: TextDecoration.underline),
                ),
                SizedBox(height: 16),
                GridView.count(
                  shrinkWrap: true,
                  scrollDirection: Axis.vertical,
                  padding: EdgeInsets.all(8),
                  crossAxisCount: 3,
                  crossAxisSpacing: 4,
                  mainAxisSpacing: 4,
                  children: foodNotifier.currentFood.subIngredients
                      .map(
                        (ingredient) => Card(
                          color: Colors.black54,
                          child: Center(
                            child: Text(
                              ingredient,
                              style: TextStyle(color: Colors.white, fontSize: 16),
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
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          FloatingActionButton(
            heroTag: 'button1',
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(builder: (BuildContext context) {
                  return WordForm(
                    isUpdating: true,
                  );
                }),
              );
            },
            child: Icon(Icons.edit),
            foregroundColor: Colors.white,
          ),
          SizedBox(height: 20),
          FloatingActionButton(
            heroTag: 'button2',
            onPressed: () => deleteFood(foodNotifier.currentFood, _onFoodDeleted),
            child: Icon(Icons.delete),
            backgroundColor: Colors.red,
            foregroundColor: Colors.white,
          ),
        ],
      ),
    );
  }
}
