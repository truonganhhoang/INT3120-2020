import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/home.dart';
void main(List<String> args){
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'English Grammar Practice',
      home: HomePage(),
    );//MaterialApp
  }   
}
/*
class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('PC build'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.star),
              title: Text('Map'),
            ),
            ListTile(
              leading: Icon(Icons.star),
              title: Text('Album'),
            ),
            ListTile(
              leading: Icon(Icons.arrow_forward),
              title: Text('Phone'),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => About(),
                )),
              
            ),
          ]
      )
    );
  }
}
class About extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Ve chung toi'),
        ),
        body: Container(
          child: RaisedButton(
            child: Text('Back'),
            onPressed: () => Navigator.pop(context),
            )
        ),
    );
  }
}*/