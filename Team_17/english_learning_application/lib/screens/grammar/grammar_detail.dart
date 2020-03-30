import 'package:flutter/material.dart';

class GrammarDetail extends StatefulWidget {
  @override
  _GrammarDetailState createState() => _GrammarDetailState();
}

class _GrammarDetailState extends State<GrammarDetail> {

  Map data = {};

  @override
  Widget build(BuildContext context) {

    data = ModalRoute.of(context).settings.arguments;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green[700],
        title: Text(data['title']),
        elevation: 0,
      ),
      body: Center(child: Text(data['subTitle']),),
    );
  }
}