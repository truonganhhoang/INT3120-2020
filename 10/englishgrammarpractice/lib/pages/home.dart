import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn.dart';
import 'package:englishgrammarpractice/pages/test.dart';
import 'package:englishgrammarpractice/pages/exercise.dart';
import 'package:englishgrammarpractice/pages/vocab.dart';
import 'package:englishgrammarpractice/pages/about.dart';
class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Bài tập ngữ pháp tiếng Anh có giải thích'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Học ngữ pháp tiếng Anh',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Learn(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Bài tập ngữ pháp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Exercise(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Học từ vựng',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Vocab(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra ngữ pháppháp',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Test(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.info , color: Colors.lightBlue,),
              title: Text('Về chúng tôi',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => About(),
                )),
              
            ),
          ]
      )
    );
  }
}