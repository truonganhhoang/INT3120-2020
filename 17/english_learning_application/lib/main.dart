import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/dictionary/dictionary.dart';
import 'package:englishlearningapplication/screens/home/home.dart';
import 'package:englishlearningapplication/screens/wrapper.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => Wrapper(),
        '/home': (context) => Home(),
        '/dictionary': (context) => Dictionary(),
      },
    );
  }
}
