import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai18/bai18.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai18/bai18.2.dart';



class Bai18 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Lượng từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('Common qualifiers',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai181(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Other qualifiers',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai182(),
                  )),

            ),
             
 
          ]
      )
    );
  }
}