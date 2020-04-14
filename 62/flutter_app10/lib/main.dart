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
import 'package:flutterapp10/tabb/TabPage.dart';
import 'package:flutterapp10/tabb2/TabPage2.dart';
import 'package:flutterapp10/testing/screens/start.dart';
import 'package:url_launcher/url_launcher.dart';

const URL = "https://play.google.com/store/apps/details?id=team.kiti.gplx";

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatefulWidget {
  @override
  HomeState createState() => new HomeState();
}

class HomeState extends State<Home> {
  Future launchURL(String url) async {
    if(await canLaunch(url)){
      await launch(url, forceSafariVC: true, forceWebView: true);
    }else{
      print("can connect ${url}");
    }
  }
  @override
  Widget build(BuildContext context) {


    return Scaffold(


//      backgroundColor: Colors.lightGreen,
      drawer: Drawer(
        child: ListView(
          children: <Widget>[
            UserAccountsDrawerHeader(
              accountEmail: Text("hatheluctb1998@gmail.com"),
              accountName: Text("Ha Luc"),

              currentAccountPicture: ClipRRect(
                borderRadius: BorderRadius.circular(110),
                child: Image.asset("assets/images/hazard.jpg", fit: BoxFit.cover,),
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
              decoration: new BoxDecoration(
                image: new DecorationImage(
                  image: new ExactAssetImage('assets/images/xemay.jpg'),
                  fit: BoxFit.cover,
                  colorFilter:
                  ColorFilter.mode(Colors.blue.withOpacity(0.7),
                      BlendMode.dstATop),
                ),
              ),
            ),
            RaisedButton(
//              onPressed: () {
//                Navigator.push(
//                  context,
//                  MaterialPageRoute(builder: (context)=> TestPage()),
//                );
//              },
              child: ListTile(
                leading: Icon(Icons.home),
                title: Text(
                    "Trang chủ",

                ),
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
                  MaterialPageRoute(builder: (context)=> TestPage()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.book),
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
                  MaterialPageRoute(builder: (context)=> Start()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.computer),
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
                  MaterialPageRoute(builder: (context)=> TabPage()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.album),
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
                  MaterialPageRoute(builder: (context)=> TabPage2()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.lightbulb_outline),
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
            ),
            RaisedButton(

              child: ListTile(
//                leading: Icon(Icons.question_answer),
                title: Text("Giao tiếp"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                launchURL(URL);
              },
              child: ListTile(
                leading: Icon(Icons.star),
                title: Text("Đánh giá ứng dụng"),

//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                launchURL(URL);
              },
              child: ListTile(
                leading: Icon(Icons.share),
                title: Text("Chia sẻ ứng dụng"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                launchURL(URL);
              },
              child: ListTile(
                leading: Icon(Icons.email),
                title: Text("Gửi email hỗ trợ"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                launchURL(URL);
              },
              child: ListTile(
                leading: Icon(Icons.lock),
                title: Text("Chính sách bảo mật"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                launchURL(URL);
              },
              child: ListTile(
                leading: Icon(Icons.library_add),
                title: Text("Phiên bản 1.1.7"),
//              onTap: (){
//                Navigator.pop(context);
//                Navigator.push(context, MaterialPageRoute(builder: (context)=> NewScreen()));
//              },
              ),
            ),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> LoginPage()),
                );
              },
              child: ListTile(
                leading: Icon(Icons.assignment_ind),
                title: Text("Đăng nhập"),
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
        title: new Text(
          "Thi bằng lái xe hạng A1",
          style: GoogleFonts.openSans(
              textStyle: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold)),
        ),



    ),
      body: Stack(
        children: <Widget>[
          Container(
            decoration: new BoxDecoration(
              color: const Color(0xff7c94b6),
              image: new DecorationImage(
                image: new ExactAssetImage('assets/images/computerr.png',),
                fit: BoxFit.cover,
                colorFilter:
                ColorFilter.mode(Colors.blue.withOpacity(0.2),
                    BlendMode.dstATop),
              ),
            ),
          ),
          Column(
            children: <Widget>[

//          SizedBox(
//            height: 30,
//          ),
//          Padding(
//            padding: EdgeInsets.only(left: 16, right: 16),
//            child: Row(
//
//              mainAxisAlignment: MainAxisAlignment.spaceBetween,
//              children: <Widget>[
//
//                IconButton(
//                  alignment: Alignment.topCenter,
//                  icon: Image.asset(
//                    "assets/profile2.png",
//                    width: 24,
//                  ),
//                  onPressed: () {
//                    Navigator.push(
//                        context,
//                        MaterialPageRoute(builder: (context)=> LoginPage()),
//                    );
//                  },
//                )
//              ],
//            ),
//          ),
//          SizedBox(
//            height: 40,
//          ),
              GridDashboard()
            ],
          ),
        ],
      )

    );
  }
}
