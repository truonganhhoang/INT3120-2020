import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class tab_tips extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text("Mẹo"),
        backgroundColor: Colors.lightBlue,
      ),
      body: Container(
        child: ListView(
          children: <Widget> [
          new Image.asset("images/a1.jpg"),

        ]
        )
      )
    );
  }
}
