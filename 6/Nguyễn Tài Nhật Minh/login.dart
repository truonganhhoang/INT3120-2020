import 'package:flutter/material.dart';
import 'package:loginform/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _showpass = false;
  TextEditingController usr = new TextEditingController();
  TextEditingController pass = new TextEditingController();
  var _usrerr = "Username khong hop le";
  var _passerr = "Password khong hop le";
  var usrInvalid = false;
  var passInvalid = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
        body: Container(
          padding: EdgeInsets.fromLTRB(30, 0, 30, 0),
          constraints: BoxConstraints.expand(),
          color: Colors.white,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Padding(
                padding: EdgeInsets.fromLTRB(0, 0, 0, 40),
                child: Container(
                    width: 70,
                    height: 70,
                    padding: EdgeInsets.all(15),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Color(0xffd8d8d8),
                    ),
                    child: FlutterLogo()),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 60),
                child: Text(
                  "Hello\nWelcomeBack ",
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                      fontSize: 30),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
                child: TextField(
                  style: TextStyle(fontSize: 18, color: Colors.black),
                  controller: usr,
                  decoration: InputDecoration(
                      labelText: "USERNAME",
                      errorText: usrInvalid ? _usrerr : null,
                      labelStyle:
                      TextStyle(color: Color(0xff888888), fontSize: 15)),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
                child: Stack(
                  alignment: AlignmentDirectional.centerEnd,
                  children: <Widget>[
                    TextField(
                      style: TextStyle(fontSize: 18, color: Colors.black),
                      controller: pass,
                      obscureText: !_showpass,
                      decoration: InputDecoration(
                          labelText: "PASSWORD",
                          errorText: passInvalid ? _passerr : null,
                          labelStyle: TextStyle(
                              color: Color(0xff888888), fontSize: 15)),
                    ),
                    GestureDetector(
                      onTap: onTuggleShowPass,
                      child: Text(
                          _showpass ? "HIDE" : "SHOW",
                          style: TextStyle(
                              color: Colors.blue,
                              fontSize: 13,
                              fontWeight: FontWeight.bold)),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
                child: SizedBox(
                  width: double.infinity,
                  height: 56,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(8.0))),
                    onPressed: onSignInClick,
                    color: Colors.blue,
                    child: Text(
                      "Sign in",
                      style: TextStyle(color: Colors.white, fontSize: 16),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
                child: Container(
                  width: double.infinity,
                  height: 130,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Text(
                        "New user?Sign up",
                        style:
                        TextStyle(fontSize: 15, color: Color(0xff888888)),
                      ),
                      Text(
                        "Forget your password",
                        style: TextStyle(fontSize: 15, color: Colors.blue),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      );
  }


  void onSignInClick() {
    setState(() {
      if (usr.text.length <= 6 || !usr.text.contains("@")) {
        usrInvalid = true;
      }
      else {
        usrInvalid = false;
      }
      if (pass.text.length <= 6) {
        passInvalid = true;
      }
      else {
        passInvalid = false;
      }
      if (!usrInvalid && !passInvalid) {
        Navigator.push(context, MaterialPageRoute(builder: gotoHome));
      }
    });
  }

  void onTuggleShowPass() {
    setState(() {
      _showpass != _showpass;
    });
  }

  Widget gotoHome(BuildContext context) {
    return HomePage();
  }

}
