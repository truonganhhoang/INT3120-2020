import 'package:flutter/material.dart';
import 'package:flutterapp10/login_page.dart';
import 'package:flutterapp10/exam/quiz_page.dart';
import 'package:google_fonts/google_fonts.dart';
import 'griddashboard.dart';
import 'package:flutterapp10/learn/learn_app.dart';
import 'package:flutterapp10/pages/test_page.dart';
import 'tabbar/tab_bar.dart';
import 'tab_bar2.dart';
import 'tab_bar3.dart';
import 'tab_bar4.dart';
import 'login_page2.dart';
void main() => runApp(MaterialApp(home: Home()));

class Home extends StatefulWidget {
  @override
  HomeState createState() => new HomeState();
}

class HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(

      backgroundColor: Color(0xff392850),
      drawer: Drawer(
        child: ListView(
          children: <Widget>[
            UserAccountsDrawerHeader(
              accountEmail: Text("hatheluctb1998@gmail.com"),
              accountName: Text("Ha Luc"),
              currentAccountPicture: ClipRRect(
                borderRadius: BorderRadius.circular(110),
                child: Image.asset("images/user1.jpg", fit: BoxFit.cover,),
              ),
              otherAccountsPictures: <Widget>[
                ClipRRect(
                  borderRadius: BorderRadius.circular(110),
                  child: Image.asset("images/user2.jpg", fit: BoxFit.cover,),
                ),
                ClipRRect(
                  borderRadius: BorderRadius.circular(110),
                  child: Image.asset("images/user3.jpg", fit: BoxFit.cover,),
                )
              ],
              decoration: BoxDecoration(
                  color: Colors.blue
              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> TestPage()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.account_circle),
                title: Text("Học lý thuyết"),
//              onTap: (){
////                setState(() {
////                  _selectedFragment = AssesmentFragment();
////                });
////                Navigator.pop(context);
////              },

              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> QuizApp()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.book),
                title: Text("Thi sát hạch"),
//              onTap: (){
//                setState(() {
//                  _selectedFragment = AssesmentFragment();
//                });
//                Navigator.pop(context);
//              },

              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> TabbedAppBarSample()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.record_voice_over),
                title: Text("Biển báo đường bộ"),
//              onTap: (){
//                setState(() {
//                  _selectedFragment = AssesmentFragment();
//                });
//                Navigator.pop(context);
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> TabbedAppBarSample2()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.folder_open),
                title: Text("Mẹo thi đạt kết quả cao"),
//              onTap: (){
//                setState(() {
//                  _selectedFragment = AssesmentFragment();
//                });
//                Navigator.pop(context);
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> TabbedAppBarSample3()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.search),
                title: Text("Tra cứu luật nhanh"),
//              onTap: (){
//                setState(() {
//                  _selectedFragment = SchoolFragment();
//                });
//                Navigator.pop(context);
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> TabbedAppBarSample4()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.question_answer),
                title: Text("Các câu hay sai"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            )
          ],
        ),
      ),
      appBar: new AppBar(
//    title: new Text("Kì thi THPT Quốc Gia"),

    ),
      body: Column(
        children: <Widget>[
          SizedBox(
            height: 110,
          ),
          Padding(
            padding: EdgeInsets.only(left: 16, right: 16),
            child: Row(

              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Column(

                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      "Thi bằng lái xe hạng A1 năm 2020",
                      style: GoogleFonts.openSans(
                          textStyle: TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold)),
                    ),

                    SizedBox(
                      height: 4,
                    ),
                    Text(
                      "Home",
                      style: GoogleFonts.openSans(
                          textStyle: TextStyle(
                              color: Color(0xffa29aac),
                              fontSize: 14,
                              fontWeight: FontWeight.w600)),
                    ),
                  ],
                ),
                IconButton(
                  alignment: Alignment.topCenter,
                  icon: Image.asset(
                    "assets/profile2.png",
                    width: 24,
                  ),
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context)=> LoginPage()),
                    );
                  },
                )
              ],
            ),
          ),
          SizedBox(
            height: 40,
          ),
          GridDashboard()
        ],
      ),
    );
  }
}
