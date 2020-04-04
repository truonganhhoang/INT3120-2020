import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai8/bai8.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai8/bai8.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai8/bai8.3.dart';
class Bai8 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Mạo từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Mạo từ bất định',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai81(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Mạo từ xác định',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai82(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các trường hợp đặc biệt của the',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai83(),
                  )),

            ),
            
          ]
      )
    );
  }
}