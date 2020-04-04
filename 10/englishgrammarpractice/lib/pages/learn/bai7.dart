import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai7/bai7.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai7/bai7.2.dart';
class Bai7 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Các phép so sánh'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Các câu so sánh cơ bản',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai71(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các câu so sánh nâng cao, so sánh kép...',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai72(),
                  )),

            ),
            
          ]
      )
    );
  }
}