import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final int totScore;
  final Function resetQuiz;
  Result(this.totScore,this.resetQuiz);
  String get getScore{
    return 'Chúc mừng bạn đã đạt được! \n${totScore} điểm';
  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Text(
            getScore,
            style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
          FlatButton(
            child: Text(
              'Bắt đầu lại!',
            ),
            textColor: Colors.blue,
            onPressed: resetQuiz,
          ),
        ],
      ),
    );
  }
}