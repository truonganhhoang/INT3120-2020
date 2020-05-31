
import 'dart:convert';
import 'package:CWCFlutter/Favorite/getUserFavorite.dart';
import 'package:CWCFlutter/api/word_api.dart';
import 'package:CWCFlutter/dialog/msg_dilog.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/cupertino.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/detail.dart';
import 'package:provider/provider.dart';

// ignore: must_be_immutable
class Words extends StatelessWidget {

  // accept the langname as a parameter

  String langname;

  Words(this.langname);

  String assettoload;

  // a function
  // sets the asset to a particular JSON file
  // and opens the JSON
  setasset() {
    if (langname == "People and relationships") {
      assettoload = "assethome/Peopleandrelationships.json";
    } else if (langname == "Animals") {
      assettoload = "assethome/Animals.json";
    } else if (langname == "Vegetables") {
      assettoload = "assethome/Vegetables.json";
    } else if (langname == "Describing the weather") {
      assettoload = "assethome/Describingtheweather.json";
    } else {
      assettoload = "assethome/Houses.json";
    }
  }

  @override
  Widget build(BuildContext context) {
    // this function is called before the build so that - Hàm này được gọi trước khi xây dựng sao cho
    // the string assettoload is avialable to the DefaultAssetBuilder - chuỗi assettoload có sẵn cho DefaultAssetBuilder
    setasset();
    // and now we return the FutureBuilder to load and decode JSON - và bây giờ chúng tôi trả lại FutureBuilder để tải và giải mã JSON
    return FutureBuilder(
      future:
          DefaultAssetBundle.of(context).loadString(assettoload, cache: true),
      builder: (context, snapshot) {
        List topics = json.decode(snapshot.data.toString());
        if (topics == null) {
          return Scaffold(
            body: Center(
              child: Text(
                "Loading",
              ),
            ),
          );
        } else {
          return WordsPage(topics: topics);
        }
      },
    );
  }
}

// ignore: must_be_immutable
class WordsPage extends StatefulWidget {

  var topics;

  WordsPage({Key key, @required this.topics}) : super(key: key);

  @override
  _WordsPageState createState() => _WordsPageState(topics);
}

class _WordsPageState extends State<WordsPage> {
  @override
  void initState() {
    WordNotifier wordNotifier =
        Provider.of<WordNotifier>(context, listen: false);
    getListWords(wordNotifier, topics[0]["name"]);
    super.initState();
  }

  var topics;

  _WordsPageState(this.topics);

  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier wordNotifier = Provider.of<WordNotifier>(context);
    Favorite favorite = new Favorite();

    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitDown, DeviceOrientation.portraitUp]);
    return Scaffold(
      appBar: new AppBar(
        elevation: 0.1,
        backgroundColor: Colors.blue,
        title: InkWell(onTap: () {}, child: Text(topics[0]["name"])),
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
                    if (favorite.checkUser(wordNotifier.wordList[index].user,
                        authNotifier.user.email)) {
                      favorite.remove(
                          wordNotifier.wordList[index].user,
                          authNotifier.user.email,
                          wordNotifier.wordList[index],
                          topics[0]["name"]);
                      String msg = "Từ " +
                          wordNotifier.wordList[index].name +
                          " vừa xóa khỏi favorite";
                      MsgDialog.showMsgDialog(context, "Favorite", msg);
                    } else {
                      favorite.add(
                          wordNotifier.wordList[index].user,
                          authNotifier.user.email,
                          wordNotifier.wordList[index],
                          topics[0]["name"]);
                      String msg = "Từ " +
                          wordNotifier.wordList[index].name +
                          " vừa thêm vào Favorite";
                      MsgDialog.showMsgDialog(context, "Favorite", msg);
                    }
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
