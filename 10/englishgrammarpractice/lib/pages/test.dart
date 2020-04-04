
import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/exercise/bai1.dart';
import 'package:englishgrammarpractice/pages/exercise/bai2.dart';
import 'package:englishgrammarpractice/pages/exercise/bai3.dart';
import 'package:englishgrammarpractice/pages/exercise/bai4.dart';
import 'package:englishgrammarpractice/pages/exercise/bai5.dart';
import 'package:englishgrammarpractice/pages/exercise/bai6.dart';
import 'package:englishgrammarpractice/pages/exercise/bai7.dart';
import 'package:englishgrammarpractice/pages/exercise/bai8.dart';
import 'package:englishgrammarpractice/pages/exercise/bai9.dart';
import 'package:englishgrammarpractice/pages/exercise/bai10.dart';



class Test extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Bài kiểm tra ngữ pháp'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Bài kiểm tra số 1',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai1(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 2',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai2(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 3',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai3(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 4',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai4(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 5',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai5(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 6',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai6(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 7',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai7(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 8',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai8(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 9',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai9(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Bài kiểm tra số 10',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai10(),
                )),
              
            ),
          ]
      )
    );
  }
}