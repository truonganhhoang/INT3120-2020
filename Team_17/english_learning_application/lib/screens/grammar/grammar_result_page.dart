import 'package:flutter/material.dart';

class GrammarResult extends StatefulWidget {
  @override
  _GrammarResultState createState() => _GrammarResultState();
}

class _GrammarResultState extends State<GrammarResult> {

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
