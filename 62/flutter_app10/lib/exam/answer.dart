import 'package:flutter/material.dart';

class Answer extends StatelessWidget {
  final Function selectAns;
  final String AnsTxt;

  Answer(this.selectAns, this.AnsTxt);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: RaisedButton(
          color: Colors.blue,
          textColor: Colors.white,
          child: Text(AnsTxt),
          onPressed: selectAns),
    );
  }
}