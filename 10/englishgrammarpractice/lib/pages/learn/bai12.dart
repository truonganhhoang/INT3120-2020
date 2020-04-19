import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai12/bai12.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai12/bai12.2.dart';

class Bai12 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Câu bị động'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Cấu trúc ngữ pháp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai121(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các trường hợp đặc biệt',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai122(),
                  )),

            ),
 
          ]
      )
    );
  }
}