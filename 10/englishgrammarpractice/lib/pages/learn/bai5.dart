import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai5/bai5.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai5/bai5.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai5/bai5.3.dart';
import 'package:englishgrammarpractice/pages/learn/bai5/bai5.4.dart';
import 'package:englishgrammarpractice/pages/learn/bai5/bai5.5.dart';

class Bai5 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Sự Cấu tạo từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Cách nhận biết danh từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai51(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Cách nhận biết tính từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai52(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Cách nhận biết động từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai53(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Cách nhận biết trạng từ',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai54(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Tiền tố của các từ loại',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai55(),
                  )),

            ),
            
          ]
      )
    );
  }
}