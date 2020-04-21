import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class tab_tool extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text("Công cụ"),
      ),
      body: Center(
        child: ListView(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.all(8),
              child: new Column(
                children: <Widget>[
                  new Text(
                    "Đổi đơn vị độ dài",
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
                    "Đổi đơn vị khối lượng",
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
                    "Đổi đơn vị thể tích",
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
                    "Đổi đơn vị thời gian",
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
                    "images/a2.jpg",
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
