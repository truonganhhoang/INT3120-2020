import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai11/bai11.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai11/bai11.2.dart';

class Bai11 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Câu giả định'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Wish và “if only” sentence',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai111(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Động từ chỉ yêu cầu, mệnh lệnh',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai112(),
                  )),

            ),
 
          ]
      )
    );
  }
}