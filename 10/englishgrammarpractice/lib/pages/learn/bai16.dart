import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai16/bai16.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai16/bai16.2.dart';


class Bai16 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Liên từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Liên từ đẳng lập',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai161(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Liên từ phụ thuộc',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai162(),
                  )),

            ),
 
          ]
      )
    );
  }
}