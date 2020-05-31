
import 'package:CWCFlutter/Favorite/getUserFavorite.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/cupertino.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/detail.dart';
import 'package:provider/provider.dart';

class FavoriteScreen extends StatefulWidget {
  @override
  FavoriteScreenState createState() => FavoriteScreenState();
}

class FavoriteScreenState extends State<FavoriteScreen> {
  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier wordNotifier = Provider.of<WordNotifier>(context);
    Favorite favorite = new Favorite();
    favorite.getFavoriteWords(wordNotifier, authNotifier.user.email);
    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitDown, DeviceOrientation.portraitUp]);
    return Scaffold(
      appBar: new AppBar(
        elevation: 0.1,
        backgroundColor: Colors.blue,
        title: InkWell(onTap: () {}, child: Text("Favorite Words")),
      ),
      body:
          // new RefreshIndicator(
          ListView.separated(
        itemBuilder: (BuildContext context, int index) {
          return ListTile(
            leading: Image.network(
              wordNotifier.wordList[index].image != null
                  ? wordNotifier.wordList[index].image
                  : 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg',
              width: 120,
              fit: BoxFit.fitWidth,
            ),
            title: Text(wordNotifier.wordList[index].name),
            subtitle: Text(wordNotifier.wordList[index].category),
            trailing: GestureDetector(
                child: Icon(
                  favorite.checkUser(wordNotifier.wordList[index].user,
                          authNotifier.user.email)
                      ? Icons.favorite
                      : Icons.favorite_border,
                  color: favorite.checkUser(wordNotifier.wordList[index].user,
                          authNotifier.user.email)
                      ? Colors.red
                      : null,
                ),
                onTap: () {
                  setState(() {
//                    if(favorite.checkUser(wordNotifier.wordList[index].user,authNotifier.user.email)){
//                      favorite.remove(wordNotifier.wordList[index].user, authNotifier.user.email, wordNotifier.wordList[index], mydata[0]["name"]);
//                    }else {
//                      favorite.add(wordNotifier.wordList[index].user, authNotifier.user.email, wordNotifier.wordList[index], mydata[0]["name"]);
//                    }
                  });
                }),
            onTap: () {
              wordNotifier.currentWord = wordNotifier.wordList[index];
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (BuildContext context) {
                return WordDetail();
              }));
            },
          );
        },
        itemCount: wordNotifier.wordList.length,
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            color: Colors.black,
          );
        },
      ),
      //  onRefresh: _refreshList,
      // ),
    );
  }
}
