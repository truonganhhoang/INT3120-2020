import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai9/bai9.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai9/bai9.2.dart';
class Bai9 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Động từ khuyết thiếu'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Các động từ khuyết thiếu P1',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai91(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các động từ khuyết thiếu P2',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai92(),
                  )),

            ),
            
            
          ]
      )
    );
  }
}