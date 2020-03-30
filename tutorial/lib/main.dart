

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'quiz.dart';


void main() => runApp(MyApp());

// #docregion MyApp
class MyApp extends StatelessWidget {
  // #docregion build
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
      home: QuizGame(),
    );
  }
  // #enddocregion build
}

class QuizGame extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new QuizGameState();
      }
    }
   
class QuizGameState extends State<QuizGame>{
  @override
  Widget build(BuildContext context) {
 
    return Scaffold(
      appBar: AppBar(
        title: Text('App luyện tập toán tiểu học'),
        backgroundColor: Colors.redAccent,
      ),
    
      body: Container(

        margin: const EdgeInsets.all(15.0),
        child: Column(

          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new MaterialButton(
              height : 50.0,
              color: Colors.redAccent,
              child : Text('Bắt đầu',
                style: TextStyle(
                  fontSize: 19.0,
                  color: Colors.white,
                )
              ),
              onPressed: startQuiz,
              

            )

          ],
        )
        
      ),


    );

  }
  //method to start quiz
  void startQuiz(){
    setState(() {
      Navigator.push(context, new MaterialPageRoute(builder: (context) => new Quiz()));
    });
  }
}
