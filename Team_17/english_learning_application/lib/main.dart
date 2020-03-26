import 'package:englishlearningapplication/CauPage/views/CauPageView.dart';
import 'package:englishlearningapplication/TuDienPage/views/TuDienPageView.dart';
import 'package:englishlearningapplication/TuPage/views/TuPage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

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
  List<Widget> listTabs = [CauPageView(), TuPageView()];
  List<String> listTitleTab = [
    CauPageView().title,
    TuPageView().title,
  ];
  final controller = PageController();

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return DefaultTabController(
      length: listTabs.length,
      child: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.green,
            title: TabBar(
              indicatorColor: Colors.lightGreen,
              isScrollable: false,
              tabs: [
                for (final tab in listTitleTab)
                  Tab(
                    child: Text(tab),
                  ),
              ],
            ),
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
                  onTap: () => Navigator.pop(context),
                ),
                ListTile(
                  title: Text("Tra từ"),
                  onTap: () {
                    Navigator.pop(context);
                    Navigator.of(context).push(
                        MaterialPageRoute(builder: (BuildContext context) {
                          return TuDienPageView();
                        }));
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
          body: TabBarView(
            children: [
              for (final tab in listTabs)
                Center(
                  child: tab,
                ),
            ],
          )),
//      body: PageView.builder(
//        controller: controller,
//        itemBuilder: (context, position) {
//          return listTabs[position];
//        },
//        itemCount: listTabs.length,
//      ),
    );
  }

//  void goToMenuScreen() {
//    Navigator.of(context)
//        .push(MaterialPageRoute(builder: (BuildContext context) {
//      return Scaffold(
//        appBar: AppBar(
//          title: Text("Menu"),
//        ),
//      );
//    }));
//  }
}
