import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai10/bai10.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai10/bai10.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai10/bai10.3.dart';
import 'package:englishgrammarpractice/pages/learn/bai10/bai10.4.dart';
import 'package:englishgrammarpractice/pages/learn/bai10/bai10.5.dart';
class Bai10 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Câu điều kiện'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Câu điều kiện loại I',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai101(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Câu điều kiện loại II',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai102(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Câu điều kiện loại III',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai103(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Câu điều kiện dạng đảo ngữ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai104(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Câu điều kiện dạng đặc biệt',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai105(),
                  )),

            ),
            
            
          ]
      )
    );
  }
}