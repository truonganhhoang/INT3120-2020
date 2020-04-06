import 'package:flutter/material.dart';

import 'dart:convert';
import 'dart:async' show Future;
import 'package:flutter/services.dart' show rootBundle;

class QuestionQuiz{
  var questions = [
    "Ngạn có 6 quả táo, Hà Lan cho ngạn 4 quả táo. Hỏi Ngạn có bao nhiêu quả",
    "Tèo mua 10 quả dưa gang giúp mẹ, trên đường đi Tèo làm rơi 2 quả. Hỏi Tèo còn bao nhiêu quả dưa gang. ",
    "Từ nhà Hùng đến trường mất 10 cây số. Hỏi cả đi cả về hùng đi bao nhiêu cây số"
  ];
  var choices = [
    ["1 quả","5 quả","7 quả","10 quả"],
    ["4 quả","2 quả","12 quả","8 quả"],
    ["2 cây số","43 cây số","15 cây số","20 cây số"]
  ];

  var answers = [
    "10 quả", "8 quả","20 cây số"
  ];
}


  Map<String, Color> btncolor = {
    "a": Colors.indigoAccent,
    "b": Colors.indigoAccent,
    "c": Colors.indigoAccent,
    "d": Colors.indigoAccent
  };
  String x = "normal";

var finalScore = 0; //Tổng điểm
int questionNumber = 1; //Chạy câu hỏi
var quiz = new QuestionQuiz();

class Quiz extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    
    return new QuizState();
      }
    
  }
    
class QuizState extends State<Quiz> {

  @override
  Widget build(BuildContext context) {
    
    return WillPopScope(
      child: Scaffold(
          // margin: const EdgeInsets.all(20.0),
          // alignment: Alignment.topCenter,
        body: new FutureBuilder(
          future: DefaultAssetBundle.of(context).loadString('assets/mathapp.json'),
          builder: (context, snapshot){
          List mydata = json.decode(snapshot.data.toString());
          if (mydata == null){
            return Center(
              child: Text(
                "Loading",
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.black,
                ),
              ),
            );
          }
          else {
          return Center(
            child: Column(
              children: <Widget>[

                Padding(padding: EdgeInsets.all(20.0)),
                
                new Container(
                  padding: EdgeInsets.all(20.0),
                  alignment: Alignment.centerRight,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      new Text("Câu $questionNumber",
                        style: TextStyle(fontSize: 20.0),
                      ),

                      new Text("Điểm : $finalScore",
                        style: TextStyle(fontSize: 20.0),
                      ),

                    ],
                  )
                ),
                new Container(
                  padding: EdgeInsets.all(20.0),
                  alignment: Alignment.centerRight,
                  child: Text(mydata[0][questionNumber.toString()],
                    style: TextStyle(fontSize:20.0),
                    ),
                ),
                new Padding(padding: EdgeInsets.all(50.0)),

                new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    //button1
                    new MaterialButton(
                      minWidth: 120.0,
                      color: btncolor["a"],
                      child: new Text(mydata[1][questionNumber.toString()]["a"],
                        style: new TextStyle(
                          fontSize: 20.0,
                          color: Colors.black,
                        ),
                      ),
                      onPressed: () {
                        setState(() {
                        if (mydata[1][questionNumber.toString()]["a"] == mydata[2][questionNumber.toString()]){
                          debugPrint("Câu trả lời chính xác");
                          btncolor["a"] = Colors.greenAccent;
                          finalScore++;
                          }
                          else{
                          debugPrint("Câu trả lời chưa chính xác");
                          btncolor["a"] = Colors.redAccent;
                          }                        
                        });
                        Future.delayed(const Duration(milliseconds: 1500), (){
                          updateQuestion();
                        });
                      }
                    ),
                    //button 2
                    new MaterialButton(
                      minWidth: 120.0,
                      color: btncolor["b"],
                      child: new Text(mydata[1][questionNumber.toString()]["b"],
                        style: new TextStyle(
                          fontSize: 20.0,
                          color: Colors.black,
                        ),
                      ),
                      onPressed: () {

                        setState(() {
                        if (mydata[1][questionNumber.toString()]["b"] == mydata[2][questionNumber.toString()]){
                          debugPrint("Câu trả lời chính xác");
                          btncolor["b"] = Colors.greenAccent;
                          finalScore++;
                          }
                          else{
                          debugPrint("Câu trả lời chưa chính xác");
                          btncolor["b"] = Colors.redAccent;
                          }                        
                        });
                        Future.delayed(const Duration(milliseconds: 1500), (){
                          updateQuestion();
                        });
                        // updateQuestion();
                      }
                    ),


                  ],
                ),
              new Padding(padding: EdgeInsets.all(10.0)),

                new Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    //button3
                    new MaterialButton(
                      minWidth: 120.0,
                      color: btncolor["c"],
                      child: new Text(mydata[1][questionNumber.toString()]["c"],
                        style: new TextStyle(
                          fontSize: 20.0,
                          color: Colors.black,
                        ),
                      ),
                      onPressed: () {

                        setState(() {
                        if (mydata[1][questionNumber.toString()]["c"] == mydata[2][questionNumber.toString()]){
                          debugPrint("Câu trả lời chính xác");
                          btncolor["c"] = Colors.greenAccent;
                          finalScore++;
                          }
                          else{
                          debugPrint("Câu trả lời chưa chính xác");
                          btncolor["c"] = Colors.redAccent;
                          }                        
                        });
                        Future.delayed(const Duration(milliseconds: 1500), (){
                          updateQuestion();
                        });
                        // updateQuestion();
                      }
                    ),
                    //button 4
                    new MaterialButton(
                      minWidth: 120.0,
                      color: btncolor["d"],
                      child: new Text(mydata[1][questionNumber.toString()]["d"],
                        style: new TextStyle(
                          fontSize: 20.0,
                          color: Colors.black,
                        ),
                      ),
                      onPressed: () {

                        setState(() {
                        if (mydata[1][questionNumber.toString()]["d"] == mydata[2][questionNumber.toString()]){
                          debugPrint("Câu trả lời chính xác");
                          btncolor["d"] = Colors.greenAccent;
                          finalScore++;
                          }
                          else{
                          debugPrint("Câu trả lời chưa chính xác");
                          btncolor["d"] = Colors.redAccent;
                          }                        
                        });
                        Future.delayed(const Duration(milliseconds: 1500), (){
                          updateQuestion();
                        });
                        // updateQuestion();
                      }
                    ),


                  ],
                ),
                  new Padding(padding: EdgeInsets.all(15.0)),

                  new Container(
                    alignment: Alignment.bottomCenter,
                    child:  new MaterialButton(
                        minWidth: 240.0,
                        height: 30.0,
                        color: Colors.red,
                        onPressed: resetQuiz,
                        child: new Text("Thoát",
                          style: new TextStyle(
                              fontSize: 18.0,
                              color: Colors.white
                          ),)
                    )
                  ),
    
              ],
            ),

              );
          }
          }
        ),
          

      ),

      onWillPop: ()async => false,
      );
    
  }


  void resetQuiz(){
      setState(() {
      Navigator.pop(context);
      finalScore = 0;
      questionNumber = 0;
    });
  }


  void updateQuestion(){

    setState(() {
      btncolor["a"] = Colors.indigoAccent;
      btncolor["b"] = Colors.indigoAccent;
      btncolor["c"] = Colors.indigoAccent;
      btncolor["d"] = Colors.indigoAccent;
      if (questionNumber == 10){
        Navigator.push(context, new MaterialPageRoute(builder: (context) => new Summary(score : finalScore)));
      }
      else{
        questionNumber++;
      }
    });
  }
}

class Summary extends StatelessWidget{
  final int score;
  Summary({Key key, @required this.score}) : super(key : key);
  @override
  Widget build(BuildContext context) {
    return new WillPopScope(
      child: Scaffold(
        
        body: new Container(
          margin: const EdgeInsets.all(10.0),
          alignment: Alignment.center,
          child: new Column(
            children: <Widget>[
              new Padding(padding: EdgeInsets.all(10.0)),
              new Text("Điểm tổng :  $score",
                style: new TextStyle(
                  fontSize :25.0,
                  ),
                ),
              
              new Padding(padding: EdgeInsets.all(10.0)),

              new MaterialButton(
                color: Colors.redAccent,
                onPressed: (){
                  questionNumber = 0;
                  finalScore = 0;
                  Navigator.pop(context);
                },
                child: new Text("Làm lại"),
              )
            ],
          )
        ),
      ), 
      onWillPop: ()async => false
    );
  }

}