import 'package:flutter/material.dart';

class Thefamily extends StatefulWidget {
  @override
  _ThefamilyState createState() => _ThefamilyState();
}

class _ThefamilyState extends State<Thefamily> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: new AppBar(
        elevation: 0.1,
        backgroundColor: Colors.blue,
        title: Text('English App'),
        actions: <Widget>[
          new IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.white,
              ),
              onPressed: () {}),
        ],
      ),
    );
  }
}