import 'package:flutter/material.dart';
import 'summary.dart';
import 'dart:convert';
import 'dart:async' show Future;
import 'package:flutter/services.dart' show rootBundle;


  Map<String, Color> btncolor = {
    "a": Colors.indigoAccent,
    "b": Colors.indigoAccent,
    "c": Colors.indigoAccent,
    "d": Colors.indigoAccent
  };
  String x = "normal";



class Quiz extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    
    return new QuizState();
      }
    
  }
    
class QuizState extends State<Quiz> {
  var finalScore = 0; //Tổng điểm
  int questionNumber = 1; //Chạy câu hỏi

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

