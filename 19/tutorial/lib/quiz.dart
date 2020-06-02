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
  String assettoload;

class GetData extends StatelessWidget {
  // accept the langname as a parameter

  final String _currentClass;
  GetData(this._currentClass);
  

  // a function
  // sets the asset to a particular JSON file
  // and opens the JSON
  setasset() {
    if (_currentClass == "Lớp 1") {
      assettoload = "assets/mathapp.json";
    } else if (_currentClass == "Lớp 2") {
      assettoload = "assets/lop2.json";
    } else if (_currentClass == "Lớp 3") {
      assettoload = "assets/lop3.json";
    } else if (_currentClass == "Lớp 4") {
      assettoload = "assets/lop4.json";
    } else {
      assettoload = "assets/lop5.json";
    }
  }

  @override
  Widget build(BuildContext context) {
    // this function is called before the build so that
    // the string assettoload is avialable to the DefaultAssetBuilder
    setasset();
    // and now we return the FutureBuilder to load and decode JSON
    return FutureBuilder(
      future:
      DefaultAssetBundle.of(context).loadString(assettoload),
      builder: (context, snapshot) {
        List mydata = json.decode(snapshot.data.toString());
        if (mydata == null) {
          return Scaffold(
            body: Center(
              child: Text(
                "Loading",
              ),
            ),
          );
        } else {
          return Quiz(mydata: mydata);
        }
      },
    );
  }
}


class Quiz extends StatefulWidget{
  final mydata;

  Quiz({Key key, @required this.mydata}) : super(key: key);

  @override
  QuizState createState() => QuizState(mydata);
    
}
    
class QuizState extends State<Quiz> {
  var mydata;
  var finalScore = 0; //Tổng điểm
  int questionNumber = 1; //Chạy câu hỏi
  QuizState(this.mydata);

  @override
  Widget build(BuildContext context) {
    
    return WillPopScope(
      child: Scaffold(
      backgroundColor: Colors.blue[100],
      body: Column(
        
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

