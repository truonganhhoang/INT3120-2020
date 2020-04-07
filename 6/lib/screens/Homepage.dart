import 'package:CWCFlutter/api/word_api.dart';
//import 'package:CWCFlutter/game/main.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/pages/thefamily.dart';
import 'package:CWCFlutter/screens/product.dart';
import 'package:CWCFlutter/screens/profile.dart';
import 'package:CWCFlutter/screens/reset.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Homepage extends StatefulWidget {
  @override
  _HomepageState createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  void initState() {
    WordNotifier foodNotifier = Provider.of<WordNotifier>(context, listen: false);
    getFoods(foodNotifier);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier foodNotifier = Provider.of<WordNotifier>(context);

    Future<void> _refreshList() async {
      getFoods(foodNotifier);
    }

    print("building Feed");
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'english app',
        ),
        actions: <Widget>[
          // action button
          FlatButton(
            onPressed: () => signout(authNotifier),
            child: Text(
              "Logout",
              style: TextStyle(fontSize: 20, color: Colors.white),
            ),
          ),
        ],
      ),
      //thanh menu
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            // header
            new UserAccountsDrawerHeader(accountName: Text(authNotifier.user != null ? authNotifier.user.displayName : "Feed",),
              currentAccountPicture: GestureDetector(
                child: new CircleAvatar(
                  backgroundColor: Colors.grey,
                  child: Icon(Icons.person, color: Colors.white,
                  ), 
                ),
              ),
              decoration: new BoxDecoration(
                  color: Colors.blue
              ),
            ),

            //body

            InkWell(
              onTap: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Homepage()));
              },
              child: ListTile(
                title: Text('Home Page'),
                leading: Icon(Icons.home, color: Colors.blue,),
              ),
            ),

            InkWell(
              onTap: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Profile()));
              },
              child: ListTile(
                title: Text('Profile'),
                leading: Icon(Icons.person, color: Colors.blue,),
              ),
            ),

//            InkWell(
//              onTap: (){
//                Navigator.push(context, MaterialPageRoute(builder: (context)=>new MyApp()));
//              },
//              child: ListTile(
//                title: Text('Game'),
//                leading: Icon(Icons.games, color: Colors.blue,),
//              ),
//            ),

            InkWell(
              onTap: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Thefamily()));
              },
              child: ListTile(
                title: Text('Categoris'),
                leading: Icon(Icons.dashboard, color: Colors.blue,),
              ),
            ),
            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('Favourites'),
                leading: Icon(Icons.favorite, color: Colors.blue,),
              ),
            ),
//            InkWell(
//              onTap: (){
//                Navigator.push(context, MaterialPageRoute(builder: (context)=>new MyApp()));
//              },
//              child: ListTile(
//                title: Text('Test'),
//                leading: Icon(Icons.games, color: Colors.blue,),
//              ),
//            ),
            Divider(),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('Settings'),
                leading: Icon(Icons.settings,),
              ),
            ),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('About'),
                leading: Icon(Icons.help, ),
              ),
            ),

          ],
        ),
      ),

      body: new Column(
        children: <Widget>[

          //padding widget
          new Padding(padding: const EdgeInsets.all(4.0),
            child: Container(
                alignment: Alignment.centerLeft,
                child: new Text('Chủ đề')),),

          //grid view
          Flexible(child: Products()),

        ],
      ),
    );
  }
}
