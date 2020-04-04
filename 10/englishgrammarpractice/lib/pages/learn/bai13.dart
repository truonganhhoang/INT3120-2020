import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai13/bai13.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai13/bai13.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai13/bai13.3.dart';

class Bai13 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Câu gián tiếp'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Chuyển từ trực tiếp sang gián tiếp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai131(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Cách chuyển các câu đặc biệt sang gián tiếp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai132(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các cấu trúc đặc biệt của câu gián tiếp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai133(),
                  )),

            ),
 
          ]
      )
    );
  }
}