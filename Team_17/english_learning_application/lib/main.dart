import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:page_indicator/page_indicator.dart';
import 'CauPage.dart';
import 'TuPage.dart';

void main() {
  runApp(MaterialApp(
    home: HomePage(),
  ));
}

class HomePage extends StatefulWidget {
  @override
  HomePageState createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  List<Widget> listHomeState = [CauPage(), TuPage()];
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
//        title: Row(
//          mainAxisAlignment: MainAxisAlignment.center,
//          children: <Widget>[
//            ButtonTheme(
//              minWidth: 30,
//              child: RaisedButton(
//                  onPressed: () {},
//                  color: Colors.green,
//                  textColor: Colors.white,
//                  child: Text("Câu")),
//            ),
//            ButtonTheme(
//              minWidth: 30,
//              child: RaisedButton(
//                  onPressed: () {},
//                  color: Colors.green,
//                  textColor: Colors.white,
//                  child: Text("Từ")),
//            ),
//          ],
//        ),
      ),
      drawer: Drawer(
        child: ListView(
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.green),
              child: ListTile(
                title: Text("Tutorial English App"),
                subtitle: Text("Contaxt: Team 17, K61N-UET-VNU"),
              ),
            ),
            ListTile(
              title: Text("Ngữ pháp"),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Text("Tra từ"),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Text("More App"),
              onTap: () {
                Navigator.pop(context);
              },
            )
          ],
        ),
      ),
      backgroundColor: Colors.grey,
      body: PageIndicatorContainer(
        key: GlobalKey(),
        child: PageView.builder(
          itemBuilder: (context, position) {
            return listHomeState[position];
          },
          itemCount: listHomeState.length,
        ),
        align: IndicatorAlign.top,
        length: 2,
        indicatorColor: Colors.grey,
        indicatorSelectorColor: Colors.red,
        indicatorSpace: 10.0,
      ),
    );
  }

  void goToMenuScreen() {
    Navigator.of(context)
        .push(MaterialPageRoute(builder: (BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: Text("Menu"),
        ),
      );
    }));
  }
}
