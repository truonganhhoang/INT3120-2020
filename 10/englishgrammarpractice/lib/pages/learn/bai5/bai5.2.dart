import 'package:flutter/material.dart';

class Bai52 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Cách nhận biết tính từ'),
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