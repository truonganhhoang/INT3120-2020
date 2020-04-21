import 'package:flutter/material.dart';
import 'package:tutorial/startquiz.dart';


class Summary extends StatefulWidget{
  final int score;
  Summary({Key key , @required this.score}) : super(key : key);
  @override
  _Summary createState() => _Summary(score);

}

class _Summary extends State<Summary>{


  List<String> images = [
    "images/godlike.png",
    "images/good.png",
    "images/bad.png",
  ];

  String message;
  String image;

  @override
  void initState(){
    if (score < 5){
      image = images[2];
      message = "Em nên cố gắng hơn, đạt $score điểm";
    }
    else if (score == 10 ){
      image = images[0];
      message = "Em làm rất xuất sắc, đạt $score điểm";
    }
    else {
      image = images[1];
      message = "Em làm tốt lắm, đạt $score điểm";
    }

    super.initState();
  }

  int score;
  _Summary(this.score);
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      appBar: AppBar(
        title: Text("Tổng kết"),
        automaticallyImplyLeading: false,
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            flex: 8,
            child: Material(
              elevation: 18.0,
              child: Container(
                child: Column(
                  children: <Widget>[
                    Material(
                      child: Container(
                        width : 300.0,
                        height: 280.0,
                        child: ClipRect(

                          child: Image(image: AssetImage(image,),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(
                        vertical: 5.0,
                        horizontal: 15.0,
                      ),
                      child : Center(
                      child: Text(
                      message,
                      style: TextStyle(fontSize: 18.0,),
                        ),
                      )

                    ),
                  ],
                ),
              ),
            ),
    
          ),
          Expanded(
            flex: 4,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                OutlineButton(
                  onPressed: (){
                    Navigator.of(context).pushReplacement(MaterialPageRoute(
                      builder: (context) => new QuizGame(),
                      ),
                    );
                  },
                  child: Text("Thoát",
                  style: TextStyle(fontSize: 18.0,
                    ),
                  ),
                  padding: EdgeInsets.symmetric(
                    vertical:10.0,
                    horizontal: 25.0,
                  ),
                  borderSide: BorderSide(color: Colors.indigo,),
                  splashColor: Colors.indigoAccent,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

}