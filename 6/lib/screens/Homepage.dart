import 'package:CWCFlutter/Favorite/getUserFavorite.dart';
import 'package:CWCFlutter/Hangman/homescreen.dart';
import 'package:CWCFlutter/notifier/fire_base_auth.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/favorite.dart';
import 'package:CWCFlutter/screens/topic.dart';
import 'package:CWCFlutter/screens/reset.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:CWCFlutter/quiz/splash.dart';

class Homepage extends StatefulWidget {
  @override
  _HomepageState createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier wordNotifier = new WordNotifier();
    Favorite favorite = new Favorite();
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'ENGLISH APP',
        ),
        actions: <Widget>[
          // action button
          FlatButton(
              onPressed: () => signout(authNotifier, context),
              child: Icon(
                Icons.exit_to_app,
                color: Colors.white,
              ) // sửa thanh logout
              ),
        ],
      ),
      //thanh menu
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            // header
            new UserAccountsDrawerHeader(
              accountName: Text(
                authNotifier.user != null
                    ? authNotifier.user.displayName
                    : "Feed",
              ),
              currentAccountPicture: GestureDetector(
                child: new CircleAvatar(
                  backgroundColor: Colors.grey,
                  child: Icon(
                    Icons.person,
                    color: Colors.white,
                  ),
                ),
              ),
              decoration: new BoxDecoration(color: Colors.blue),
            ),

            //body

            InkWell(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => new Homepage()));
              },
              child: ListTile(
                title: Text('Home Page'),
                leading: Icon(
                  Icons.home,
                  color: Colors.blue,
                ),
              ),
            ),

            InkWell(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => new Reset()));
              },
              child: ListTile(
                title: Text('Reset PassWord'),
                leading: Icon(
                  Icons.refresh,
                  color: Colors.blue,
                ),
              ),
            ),

            InkWell(
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => new SplashScreen()));
              },
              child: ListTile(
                title: Text('Quiz'),
                leading: Icon(
                  Icons.school,
                  color: Colors.blue,
                ),
              ),
            ),

            InkWell(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => new HomeScreen()));
              },
              child: ListTile(
                title: Text('Hangman'),
                leading: Icon(
                  Icons.games,
                  color: Colors.blue,
                ),
              ),
            ),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Favourites'),
                onTap: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => new FavoriteScreen()));
                },
                leading: Icon(
                  Icons.favorite,
                  color: Colors.blue,
                ),
              ),
            ),

            Divider(),

            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Settings'),
//                onTap: Test(),
                leading: Icon(
                  Icons.settings,
                ),
              ),
            ),

            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('About'),
                leading: Icon(
                  Icons.help,
                ),
              ),
            ),
          ],
        ),
      ),

      body: new Column(
        children: <Widget>[
          //padding widget
          new Padding(
            padding: const EdgeInsets.all(4.0),
            child: Container(
                alignment: Alignment.centerLeft, child: new Text(' ')),
          ),

          //grid view
          Flexible(child: Topics()),
        ],
      ),
    );
  }
}
