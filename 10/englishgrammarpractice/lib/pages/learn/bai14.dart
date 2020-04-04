import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai14/bai14.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai14/bai14.2.dart';


class Bai14 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Mệnh đề quan hệ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Đại từ quan hệ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai141(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Rút gọn mệnh đề lược bỏ đại từ quan hệ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai142(),
                  )),

            ),
 
          ]
      )
    );
  }
}