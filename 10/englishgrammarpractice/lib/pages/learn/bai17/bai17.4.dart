import 'package:flutter/material.dart';

class Bai174 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('V, adj + Preposition'),
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