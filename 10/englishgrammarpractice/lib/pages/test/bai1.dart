import 'package:flutter/material.dart';

class Bai1 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Bài kiểm tra số 1'),
        ),
        body: Container(
          child: RaisedButton(
            child: Text('Back'),
            onPressed: () => Navigator.pop(context),
            )
        ),
    );
  }
}