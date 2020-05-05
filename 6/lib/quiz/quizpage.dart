import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:CWCFlutter/quiz/resultpage.dart';
import 'package:CWCFlutter/quiz/homequiz.dart';
import 'package:flutter_tts/flutter_tts.dart';

final FlutterTts flutterTts = FlutterTts();

// ignore: must_be_immutable
class GetJson extends StatelessWidget {
  // accept the langname as a parameter

  String langname;
  GetJson(this.langname);
  String assettoload;

  // a function
  // sets the asset to a particular JSON file
  // and opens the JSON
  setasset() {
    if (langname == "People and relationships") {
      assettoload = "assets/Peopleandrelationships.json";
    } else if (langname == "Animals") {
      assettoload = "assets/animals.json";
    } else if (langname == "Vegetables") {
      assettoload = "assets/vegetables.json";
    } else if (langname == "Describing the weather") {
      assettoload = "assets/describingtheweather.json";
    } else {
      assettoload = "assets/houses.json";
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
          return QuizPage(topics: topics);
        }
      },
    );
  }
}

// ignore: must_be_immutable
class QuizPage extends StatefulWidget {
  var topics;

  QuizPage({Key key, @required this.topics}) : super(key: key);
  @override
  _QuizPageState createState() => _QuizPageState(topics);
}

class _QuizPageState extends State<QuizPage> {
  var topics;
  _QuizPageState(this.topics);

  Color colortoshow = Colors.blue;
  Color right = Colors.green;
  Color wrong = Colors.red;
  int marks = 0;
  int i = 1;
  // extra varibale to iterate
  int j = 1;
  int timer = 30;
  String showtimer = "30";

  Map<String, Color> btncolor = {
    "a": Colors.indigoAccent,
    "b": Colors.indigoAccent,
    "c": Colors.indigoAccent,
    "d": Colors.indigoAccent,
  };

  bool canceltimer = false;


  var random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // overriding the initstate function to start timer as this screen is created
  @override
  void initState() {
    starttimer();
    super.initState();
  }

  // overriding the setstate function to be called only if mounted
  @override
  void setState(fn) {
    if (mounted) {
      super.setState(fn);
    }
  }

  void starttimer() async {
    const onesec = Duration(seconds: 1);
    Timer.periodic(onesec, (Timer t) {
      setState(() {
        if (timer < 1) {
          t.cancel();
          nextquestion();
        } else if (canceltimer == true) {
          t.cancel();
        } else {
          timer = timer - 1;
        }
        showtimer = timer.toString();
      });
    });
  }

  void nextquestion() {
    canceltimer = false;
    timer = 30;
    setState(() {
      if (j < 10) {
        i = random[j];
        j++;
      } else {
        Navigator.of(context).pushReplacement(MaterialPageRoute(
          builder: (context) => ResultPage(marks: marks),
        ));
      }
      btncolor["a"] = Colors.indigoAccent;
      btncolor["b"] = Colors.indigoAccent;
      btncolor["c"] = Colors.indigoAccent;
      btncolor["d"] = Colors.indigoAccent;
    });
    starttimer();
  }

  void checkanswer(String k) {
    if (topics[2][i.toString()] == topics[1][i.toString()][k]) {
      marks = marks + 5;
      // changing the color variable to be green
      colortoshow = right;
    } else {
      colortoshow = wrong;
    }
    setState(() {
      btncolor[k] = colortoshow;
      canceltimer = true;
    });

    // changed timer duration to 1 second
    Timer(Duration(seconds: 1), nextquestion);
  }

  Widget choicebutton(String k) {
    return Padding(
      padding: EdgeInsets.symmetric(
        vertical: 10.0,
        horizontal: 20.0,
      ),
      child: MaterialButton(
        onPressed: () => checkanswer(k),
        child: Text(
          topics[1][i.toString()][k],
          style: TextStyle(
            color: Colors.white,
            fontSize: 16.0,
          ),
          maxLines: 1,
        ),
        color: btncolor[k],
        splashColor: Colors.indigo[700],
        highlightColor: Colors.indigo[700],
        minWidth: 200.0,
        height: 45.0,
        shape:
        RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
      ),
    );
  }

  Future<bool> _onBackPressed() {
    return showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text("Bạn có muốn thoát game?"),
          actions: <Widget>[
            FlatButton(
              child: Text("Không"),
              onPressed: () => Navigator.pop(context, false),
            ),
            FlatButton(
              child: Text("Có"),
              onPressed: () => Navigator.pop(context, true),
            ),
          ],
        ));
  }

  @override
  Widget build(BuildContext context) {
    Future _speak(String text) async {
      await flutterTts.setLanguage("en-US");
      await flutterTts.setPitch(1);
      print(await flutterTts.getVoices);
      await flutterTts.speak(text);
      // nút voice
    }

    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitDown, DeviceOrientation.portraitUp]);
    return WillPopScope(
      onWillPop: _onBackPressed,
      child: Scaffold(
        appBar: new AppBar(
          elevation: 0.1,
          backgroundColor: Colors.blue,
          title: InkWell(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => new HomePage()));
              },
              child: Text('Quizstar')),
        ),
        body: Column(
          children: <Widget>[
            Expanded(
              flex: 3,
              child: Container(
                padding: EdgeInsets.all(15.0),
                child: Container(
                  width: 220.0,
                  height: 220.0,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage(topics[0][i.toString()]),
                    ),
                  ),
                  child: FlatButton(
                    padding: EdgeInsets.all(0.0),
                    onPressed: () => _speak(topics[2][i.toString()]),
                    child: null,
                  ),
                ),
              ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                child: IconButton(
                  onPressed: () => _speak(topics[2][i.toString()]),
                  icon: Icon(Icons.volume_up),
                  color: Colors.black,
                ),
              ),
            ),
            Expanded(
              flex: 6,
              child: Container(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    choicebutton('a'),
                    choicebutton('b'),
                    choicebutton('c'),
                    choicebutton('d'),
                  ],
                ),
              ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                alignment: Alignment.topCenter,
                child: Center(
                  child: Text(
                    showtimer,
                    style: TextStyle(
                      fontSize: 35.0,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
