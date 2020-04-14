import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'quiz.dart';

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
        automaticallyImplyLeading: false,
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
      Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) => new Quiz()));
    });
  }
}
