import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai15/bai15.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai15/bai15.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai15/bai15.3.dart';


class Bai15 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Mệnh đề trạng từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Mệnh đề chỉ thời gian và nơi chốn',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai151(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Mệnh đề trạng ngữ chỉ nguyên nhân và cách thức',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai152(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Mệnh đề chỉ mục đích và sự tương phản',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai153(),
                  )),

            ),
 
          ]
      )
    );
  }
}