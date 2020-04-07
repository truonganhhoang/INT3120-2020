import 'package:flutter/material.dart';

class Bai103 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Câu điều kiện loại III'),
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