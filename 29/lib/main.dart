/*import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:math/screens/plane_geometry.dart';
import 'package:math/tab_screens/tab_tips.dart';
import 'package:math/tab_screens/tab_tool.dart';
import 'package:math/tab_screens/tab_you_know.dart';
import './screens/algebra.dart';
import './screens/differential_derivative.dart';
import './screens/integral.dart';
import './screens/matrix.dart';
import './screens/analytic_geometry.dart';
import './screens/probability_statistics.dart';
import './screens/plane_geometry.dart';
import './screens/trigonometric.dart';
import './tab_screens/tab_you_know.dart';
import './tab_screens/tab_tips.dart';
import './tab_screens/tab_tool.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
      routes: <String, WidgetBuilder>{
        '/daiso': (BuildContext context) => algebra(),
        '/hinhphang': (BuildContext context) => plane_geometry(),
        '/luonggiac': (BuildContext context) => trigonometric(),
        '/hinhkhonggian': (BuildContext context) => oxyz_geometry(),
        '/viphan': (BuildContext context) => differential_derivative(),
        '/tichphan': (BuildContext context) => integral(),
        '/matran': (BuildContext context) => matrix(),
        '/xstk': (BuildContext context) => probability_statistics(),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

/////////////////////////////////////////
class _MyHomePageState extends State<MyHomePage> {
  int i = 0;
  var pages = [
    new tab_tips(),
    new tab_tool(),
    new tab_you_know(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Trang chủ'),
      ),
      body: Container(
          child: ListView(
        padding: const EdgeInsets.all(3.0),
        children: <Widget>[
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr1.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Đại số',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/daiso');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr2.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Hình học phẳng',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/hinhphang');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr3.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Hình học giải tích',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/luonggiac');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr4.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Lượng giác',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/luonggiac');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr5.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Ma trận',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/matran');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr6.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Vi phân',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/viphan');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr7.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Tích phân',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/tichphan');
              }
              //color: Colors.teal[700],
              ),
          FlatButton(
              padding: const EdgeInsets.all(8),
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    "images/sr8.PNG",
                    fit: BoxFit.fill,
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(
                        left: 0, right: 0, top: 120.0, bottom: 0),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                    ),
                    child: Text(
                      'Xác suất thống kê',
                      style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/xstk');
              }
              //color: Colors.teal[700],
              ),
        ],
      )),
      /*bottomNavigationBar:
      BottomNavigationBar(
        backgroundColor: Colors.lightBlueAccent,
        selectedItemColor: Colors.white,
        type: BottomNavigationBarType.fixed,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            //onTap :Navigator.pushNamed(context, '/daiso'),

            icon: Icon(Icons.home),
            title: Text(
              'Trang chủ',
              style: TextStyle(fontSize: 15.0),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.developer_board),

            title: Text(
              'Công cụ',
              style: TextStyle(fontSize: 15.0),
            ),
          ),

          BottomNavigationBarItem(
            icon: Icon(Icons.lightbulb_outline),
            title: Text(
              'Mẹo',
              style: TextStyle(fontSize: 15.0),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.help_outline),
            title: Text(
              'Bạn có biết',
              style: TextStyle(fontSize: 15.0),
            ),
          )
        ],*/
     // bottomNavigationBar: BottomAppBar(
        bottomNavigationBar: new BottomNavigationBar(
          items: [
            new BottomNavigationBarItem(
              icon: new Icon(Icons.home),
              title: new Text('Home'),
            ),
            new BottomNavigationBarItem(
              icon: new Icon(Icons.photo_library),
              title: new Text('Blog'),
            ),
            new BottomNavigationBarItem(
              icon: new Icon(Icons.book),
              title: new Text('Library'),
            ),
            new BottomNavigationBarItem(
              icon: new Icon(Icons.notifications),
              title: new Text('Notifications'),
            ),
          ],
          currentIndex: i,
          type: BottomNavigationBarType.fixed,
          onTap: (index) {
            setState(() {
              i = index;
            });
          },
        ),
      )
      );
  }
}  */
/////////////////////////////////////////
////////////////////////////////////////

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:math/tab_screens/tab_formula.dart';
import 'package:math/tab_screens/tab_tips.dart';
import 'package:math/tab_screens/tab_tool.dart';
import 'package:math/tab_screens/tab_you_know.dart';
import './tab_screens/tab_you_know.dart';
import './tab_screens/tab_tips.dart';
import './tab_screens/tab_tool.dart';

void main() => runApp(MainApp());

class MainApp extends StatefulWidget {
  @override
  _MainAppState createState() => new _MainAppState();

}

class _MainAppState extends State<MainApp> {
  int i = 0;
  var pages = [
    new tab_formula(),
    new tab_tool(),
    new tab_tips(),
    new tab_you_know()
  ];

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
         body: pages[i],

        bottomNavigationBar: new BottomNavigationBar(
          backgroundColor: Colors.lightBlue,
          selectedItemColor: Colors.white ,
          unselectedItemColor: Colors.black54 ,
          items: [
          new BottomNavigationBarItem(
            icon: new Icon(Icons.home),
            title: new Text('Công thức'),
          ),
          new BottomNavigationBarItem(
            icon: new Icon(Icons.developer_board),
            title: new Text('Công cụ'),
          ),
          new BottomNavigationBarItem(
            icon: new Icon(Icons.help_outline),
            title: new Text('Mẹo'),
          ),
          new BottomNavigationBarItem(
            icon: new Icon(Icons.lightbulb_outline),
            title: new Text('Bạn có biết'),
          ),
        ],
        currentIndex: i,
        type: BottomNavigationBarType.fixed,
        onTap: (index) {
          setState(() {
            i = index;
          });
        },
      ),
    )
    );
  }
}