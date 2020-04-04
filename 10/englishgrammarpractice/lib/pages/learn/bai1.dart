/*import 'package:flutter/material.dart';

class Bai1 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('1.Các thì trong tiếng Anh'),
        ),
        body: Container(
          child: RaisedButton(
            child: Text('Back'),
            onPressed: () => Navigator.pop(context),
            )
        ),
    );
  }
}*/
import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.3.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.4.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.5.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.6.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.7.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.8.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.9.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.10.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.11.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.12.dart';
import 'package:englishgrammarpractice/pages/learn/bai1/bai1.13.dart';
class Bai1 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Các thì trong tiếng Anh'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Hiện tại đơn',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai11(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Hiện tại tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai12(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Hiện tại hoàn thành',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai13(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('Hiện tại hoàn thành tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai14(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Quá khứ đơn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai15(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Quá khứ  tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai16(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Quá khứ  hoàn thành',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai17(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Quá khứ  hoàn thành tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai18(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Tương lai đơn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai19(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Tương lai  tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai110(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Tương lai  hoàn thành',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai111(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Tương lai hoàn thành tiếp diễn',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai112(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books , color: Colors.lightBlue,),
              title: Text('Bảng động từ bất quy tắc',style: TextStyle(fontSize: 20)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai113(),
                )),
              
            ),
          ]
      )
    );
  }
}