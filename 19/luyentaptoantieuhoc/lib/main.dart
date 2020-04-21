

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
  
  var _grades =  ['Lớp 1','Lớp 2','Lớp 3','Lớp 4','Lớp 5',];
  var _currentGradeSelected = 'Lớp 1';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        //Homepage background 
        decoration: BoxDecoration(
          image: new DecorationImage(image: new AssetImage("images/homepage.png"), fit: BoxFit.cover,),
        ),
        
        child: new Column(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.all(132.0),
            ),
            // Drop Down List 
            Container(
              height: 40.0,
              decoration: BoxDecoration(
                color: Colors.white,
              ),
              child: DropdownButton<String>(              
                items: _grades.map((String dropDownStringItem){
                  return DropdownMenuItem<String>(
                    value: dropDownStringItem,
                    child: Row(
                        children: <Widget>[
                          SizedBox(width: 10,),
                          Text(
                            dropDownStringItem,
                            style:  TextStyle(fontSize: 18.0,color: Colors.black),
                          ),
                        ],
                      )
                    );
                }).toList(),
                onChanged: (String newValueSelected){
                  _onDropDownItemSelected(newValueSelected);
                },
                value: _currentGradeSelected,
              ),
            ),
            
            // Start Button
            Container(
              margin: EdgeInsets.all(20.0),
              height: 50.0,
              alignment: Alignment.center,

              child: RaisedButton( // Color - Start Button
                onPressed: startQuiz,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(80.0)),
                padding: EdgeInsets.all(0.0),
                child: Ink(
                  decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [Color(0xff374ABE), Color(0xff64B6FF)],
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight,
                      ),
                      borderRadius: BorderRadius.circular(30.0)
                  ),

                  child: Container( // Text - Start Button
                    constraints: BoxConstraints(maxWidth: 230.0, minHeight: 50.0),
                    alignment: Alignment.center,
                    child: Text(
                      "Bắt đầu làm toán",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 19.0,
                        color: Colors.white
                      ),
                    ),
                  ),
                ),
              ),

  
           ),
          ]
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

  void _onDropDownItemSelected(String newValueSelected) {
	  setState(() {
		  this._currentGradeSelected = newValueSelected;
	  });
  } 

}


