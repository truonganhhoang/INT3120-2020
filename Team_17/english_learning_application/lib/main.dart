import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
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
  final controller = PageController();
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: Container(
          padding: EdgeInsets.only(top: 0.0),
          child: Column(
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  FlatButton(
                    child: Text("Câu", style: TextStyle(fontSize: 20.0),),
                    onPressed: (){
                      setState(() {
                        controller.animateToPage(0, duration: Duration(milliseconds: 500), curve: Curves.ease);
                      });
                    },
                  ),
                  FlatButton(
                    child: Text("Từ", style: TextStyle(fontSize: 20.0),),
                    onPressed: (){
                      setState(() {
                        controller.animateToPage(1, duration: Duration(milliseconds: 500), curve: Curves.ease);
                      });
                    },
                  )
                ],
              ),
              Center(
                child: SmoothPageIndicator(
                  controller: controller,
                  count: 2,
                  effect: SlideEffect(
                    spacing: 0.0,
                    dotWidth: 90.0,
                    dotHeight: 2.0,
                    dotColor: Colors.green,
                    activeDotColor: Colors.white,
                  ),),
              )
            ],
          )
        )
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
      body: PageView.builder(
        controller: controller,
        itemBuilder: (context, position) {
          return listHomeState[position];
        },
        itemCount: listHomeState.length,
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
