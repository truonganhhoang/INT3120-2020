/*import 'package:flutter/material.dart';

class Bai3 extends StatelessWidget{
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
}
*/
import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai3/bai3.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai3/bai3.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai3/bai3.3.dart';

class Bai3 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Sự hòa hợp giữa chủ ngữ và động từ'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('To – V',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai31(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('V-ing',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai32(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Các cấu trúc thường dùng với to-V và V-ing',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai33(),
                  )),

            ),
          ]
      )
    );
  }
}