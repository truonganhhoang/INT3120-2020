
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'sidemenu.dart';
import 'setup/login.dart';

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
      home: LoginPage(),
    );
  }
  // #enddocregion build
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    Key key,
    @required this.user
  }) : super(key : key);
  final FirebaseUser user;

  @override
  _HomepageState createState() => _HomepageState();
}



class _HomepageState extends State<MyHomePage>{
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
