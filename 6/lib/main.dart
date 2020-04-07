import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/Homepage.dart';
import 'package:CWCFlutter/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'notifier/auth_notifier.dart';

void main() => runApp(MultiProvider(
      providers: [
        ChangeNotifierProvider(
          builder: (context) => AuthNotifier(),
        ),
        ChangeNotifierProvider(
          builder: (context) => WordNotifier(),
        ),
      ],
      child: MyApp(),
    ));

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
//      theme: ThemeData(
//        primarySwatch: Colors.blue,
//        accentColor: Colors.lightBlue,
//      ),
      home: Consumer<AuthNotifier>(
        builder: (context, notifier, child) {
          return notifier.user != null ? Homepage() : Login();
        },
      ),
    );
  }
}
