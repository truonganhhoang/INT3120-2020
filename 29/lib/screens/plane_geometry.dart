import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class plane_geometry extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text("Hình học phẳng"),
      ),
      body: Center(
        child: ListView(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "Chương 1",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a1.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "2.",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a2.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a3.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a4.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a2.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a1.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a4.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "",
                    style: TextStyle(fontSize: 25.0),
                    overflow: TextOverflow.fade,
                  ),
                  new Image.asset(
                    "images/a3.jpg",
                    fit: BoxFit.fill,
                  ),
                ],
              ),

              //color: Colors.teal[700],
            ),
          ],
        ),
      ),
    );
  }
}
