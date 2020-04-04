/*import 'package:flutter/material.dart';

class Bai2 extends StatelessWidget{
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
import 'package:englishgrammarpractice/pages/learn/bai2/bai2.1.dart';
import 'package:englishgrammarpractice/pages/learn/bai2/bai2.2.dart';
import 'package:englishgrammarpractice/pages/learn/bai2/bai2.3.dart';

class Bai2 extends StatelessWidget{
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
              title:Text('S singular – V singular, S plural – V plural',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai21(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Always singular',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai22(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('Other structures',style: TextStyle(fontSize: 20)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai23(),
                  )),

            ),
          ]
      )
    );
  }
}