import 'package:flutter/material.dart';
import 'package:math/screens/plane_geometry.dart';
import './screens/algebra.dart';
import './screens/differential_derivative.dart';
import './screens/integral.dart';
import './screens/matrix.dart';
import './screens/oxyz_geometry.dart';
import './screens/probability_statistics.dart';
import './screens/plane_geometry.dart';
import './screens/trigonometric.dart';

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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:  AppBar(
        title: Text('Trang chủ'),
      ),
      body: Container(
          child: ListView(
            padding: const EdgeInsets.all(3.0),
            children: <Widget>[

              FlatButton(
                padding: const EdgeInsets.all(8),
                child: new Column(
                  children: <Widget>[
                    new Text("Đại Số", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                    new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                  ],
                ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/daiso');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Hình học phẳng", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/hinhphang');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Lượng giác", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/luonggiac');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Hình học không gian", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/hinhkhonggian');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Đạo hàm vi phân", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/viphan');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Tích phân", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/tichphan');

                  }
                //color: Colors.teal[700],
              ),
              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Ma trận", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/matran');

                  }
                //color: Colors.teal[700],
              ),

              FlatButton(
                  padding: const EdgeInsets.all(8),
                  child: new Column(
                    children: <Widget>[
                      new Text("Xác suất thống kê", style: TextStyle(fontSize: 25.0), overflow: TextOverflow.fade,),
                      new  Image.asset("images/ds.jpg",fit: BoxFit.fill,),

                    ],
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, '/xstk');

                  }
                //color: Colors.teal[700],
              ),
            ],
          )
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.blue,
        selectedItemColor: Colors.white,
          type: BottomNavigationBarType.fixed,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text('Trang chủ', style: TextStyle(fontSize: 15.0),),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.developer_board),
            title: Text('Công cụ',style: TextStyle(fontSize: 15.0),),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.lightbulb_outline),
            title: Text('Mẹo',style: TextStyle(fontSize: 15.0),),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.help_outline),
            title: Text('Bạn có biết',style: TextStyle(fontSize: 15.0),),
          )
        ],


      ),
    );
  }
}