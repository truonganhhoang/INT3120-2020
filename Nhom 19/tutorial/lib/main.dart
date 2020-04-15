
import 'package:flutter/material.dart';
import 'sidemenu.dart';

void main() => runApp(MyApp());

// #docregion MyApp
class MyApp extends StatelessWidget {
  // #docregion build
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
      home: MyHomePage(),
    );
  }
  // #enddocregion build
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text('Trang chủ'),
      ),
      body: Container(
        child: Image(image: AssetImage('images/home.jpg'),
        width: double.infinity,
        fit: BoxFit.cover,
        height: double.infinity,
        ),
      ),
    );
  }
}
