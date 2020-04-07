import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai17/bai17.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai17/bai17.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai17/bai17.3.dart';
import 'package:englishgrammarpractice/pages/learn/bai17/bai17.4.dart';
import 'package:englishgrammarpractice/pages/learn/bai17/bai17.5.dart';


class Bai17 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Giới từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('List of prepositions',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai171(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Common Prepositions',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai172(),
                  )),

            ),
             ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Complex Propositions',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai173(),
                  )),

            ),
             ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('V, adj + Preposition',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai174(),
                  )),

            ),
             ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Preposition + noun',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai175(),
                  )),

            ),
 
          ]
      )
    );
  }
}