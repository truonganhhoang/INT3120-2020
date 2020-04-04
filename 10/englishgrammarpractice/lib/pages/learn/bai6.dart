import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai6/bai6.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai6/bai6.2.dart';
class Bai6 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Tính từ trạng từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Tính từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai61(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Trạng từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai62(),
                  )),

            ),
            
          ]
      )
    );
  }
}