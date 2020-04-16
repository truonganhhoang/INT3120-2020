import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  final String QusTxt;
  Question(this.QusTxt);
  @override
  Widget build(BuildContext context) {
    return Container(
        width: double.infinity,
        margin: EdgeInsets.all(10),
        child: Text(QusTxt,
            style: TextStyle(fontSize: 28), textAlign: TextAlign.center));
  }
}