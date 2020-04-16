import 'package:flutterapp10/testing/db/question.dart';
import 'package:flutterapp10/testing/db/questions.dart';
import 'package:flutterapp10/testing/ui/animated_background.dart';
import 'package:flutterapp10/testing/ui/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';
import 'package:liquid_progress_indicator/liquid_progress_indicator.dart';
import 'package:sqflite/sqflite.dart';

import 'interview.dart';

class Start extends StatefulWidget {
  Start({Key key}) : super(key: key);

  @override
  _StartState createState() => _StartState();
}

class _StartState extends State<Start> with SingleTickerProviderStateMixin {
  int completionPercentage = 0;

  _onPressedPlay() async {
    await calculateCompletionPercentage();
    if (completionPercentage == 100) {
      _showGameFinishedDialog();
    } else {
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => Interview()))
          .then((value) {
        calculateCompletionPercentage();
      });
    }
  }

  _resetProgress() async {
    await Questions.reset();
    calculateCompletionPercentage();
  }

  _showGameFinishedDialog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Kết thúc bài thi'),
          content: const Text(
              'Chúc mừng, bạn đã làm hết bài thi sát hạch! Nếu bạn muốn làm lại, hãy ấn nút làm lại phía bên dưới'),
          actions: <Widget>[
            FlatButton(
              child: Text('Okay'),
              onPressed: () {
                // Close dialog
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  _onPressedReset() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Làm lại'),
          content: const Text(
              'Bạn có muốn làm lại bài này không'),
          actions: <Widget>[
            FlatButton(
              child: Text('Đồng ý'),
              onPressed: () {
                // Close dialog
                Navigator.of(context).pop();
                // Reset progress
                _resetProgress();
              },
            ),
            FlatButton(
              child: Text('Thoát'),
              onPressed: () {
                // Close dialog
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  void initState() {
    super.initState();
    calculateCompletionPercentage();
  }

  calculateCompletionPercentage() async {
    int percentage = (await Questions.completionPercentage());
    setState(() {
      completionPercentage = percentage;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          centerTitle: true,
          title: Text("Thi sát hạch",
              style: TextStyle(
                  color: Colors.white, fontSize: 30, fontFamily: 'Kirvy'))),
      backgroundColor: Colors.white,

      body: SafeArea(
        child: Stack(children: [
          Container(
            decoration: new BoxDecoration(
              image: new DecorationImage(
                image: new ExactAssetImage('assets/images/star.png',),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Padding(
              padding: EdgeInsets.all(32),
              child: Column(children: [
                SizedBox(height: 50),
                Center(
                    child: SizedBox(
                      width: 180,
                      height: 180,
                      child: LiquidCircularProgressIndicator(
                          value: completionPercentage / 100.0,
                          borderWidth: 5.0,
                          borderColor: Colors.white.withAlpha(80),
                          valueColor: AlwaysStoppedAnimation(primaryColor),
                          direction: Axis.vertical,
                          center: Text(completionPercentage.toString() + "%",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 40,
                                  fontFamily: 'Kirvy'))),
                    )),
                SizedBox(height: 70),
                Row(
                  children: <Widget>[
                    Expanded(
                      child: ButtonTheme(
                        height: 70,
                        child: RaisedButton(
                            onPressed: () => _onPressedPlay(),
                            color: Colors.lightBlue,
                            child: Text("Bắt đầu",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 35,
                                    fontFamily: 'Kirvy'))),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 50),
                Row(
                  children: <Widget>[
                    Expanded(
                      child: ButtonTheme(
                        height: 70,
                        child: RaisedButton(
                            onPressed: () => _onPressedReset(),
                            color: Colors.lightBlue,
                            child: Text("Làm lại",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 35,
                                    fontFamily: 'Kirvy'))),
                      ),
                    ),
                  ],
                ),
              ])),
          Align(
            alignment: FractionalOffset.bottomCenter,
            child: Stack(
              children: <Widget>[
                AnimatedWave(
                    height: 80,
                    offset: 0.0,
                    speed: 0.8,
                    color: primaryColor.withAlpha(80)),
                AnimatedWave(
                    height: 80,
                    offset: 1.5,
                    speed: 0.8,
                    color: primaryColor.withAlpha(80)),
              ],
            ),
          )
        ]),
      ),
    );
  }
}
