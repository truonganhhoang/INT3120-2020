import 'package:CWCFlutter/model/user.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/Reset.dart';
import 'package:firebase_database/ui/firebase_list.dart';
import 'package:flutter/material.dart';
import 'package:CWCFlutter/pages/infor_cart.dart';
import 'package:flutter/widgets.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart' as launcher;

const url = '';//link thay doi pass
const email = '@gmail.com';//nhập mail lúc register


class Profile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  void _showDialog(BuildContext context, {String title, String msg}) {
    final dialog = AlertDialog(
      title: Text(title),
      content: Text(msg),
      actions: <Widget>[
        RaisedButton(
          color: Colors.teal,
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text(
            'Close',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
        ),
      ],
    );
    showDialog(context: context, builder: (x) => dialog);
  }

  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier foodNotifier = Provider.of<WordNotifier>(context);
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            CircleAvatar(
              radius: 50,
              backgroundImage: AssetImage('images/Mahmud_200.jpg'),//tìm đại hình vuvào
            ),
            Text(
              authNotifier.user != null ? authNotifier.user.displayName : "Nhoms so 6",
              style: TextStyle(
                fontSize: 40.0,
                color: Colors.white,
                fontWeight: FontWeight.bold,
                fontFamily: 'Pacifico',
              ),
            ),
            SizedBox(
              height: 20,
              width: 200,
              child: Divider(
                color: Colors.teal.shade700,
              ),
            ),

            InfoCard(
              text:authNotifier.user != null ? authNotifier.user.email : "@gmail.com",
              icon: Icons.email,
            ),
            InfoCard(
              text: 'Reset PassWord',
              icon: Icons.web,
              onPressed: () async {
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Reset()));
              },
            ),
            InfoCard(
              text: 'Hà Nội, Việt Nam',
              icon: Icons.location_city,
            ),
          ],
        ),
      ),
      backgroundColor: Colors.teal[200],
    );
  }
}