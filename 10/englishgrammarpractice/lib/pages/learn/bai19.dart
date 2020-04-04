import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai19/bai19.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai19/bai19.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai19/bai19.3.dart';


class Bai19 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Câu đảo ngữ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Đảo ngữ phần 1',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai191(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Đảo ngữ phần 2',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai192(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Đảo ngữ phần 3',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai193(),
                  )),

            ),
             
 
          ]
      )
    );
  }
}