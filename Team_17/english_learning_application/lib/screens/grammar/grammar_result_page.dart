import 'dart:ui';

import 'package:flutter/material.dart';

class GrammarResult extends StatefulWidget {
  @override
  _GrammarResultState createState() => _GrammarResultState();
}

class _GrammarResultState extends State<GrammarResult> {
  Map data = {};
  List<Widget> listText = new List<Widget>();

  @override
  Widget build(BuildContext context) {
    data = ModalRoute.of(context).settings.arguments;
    createParagraph(data['context']);

    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.green[700],
          title: Text(data['title']),
          elevation: 0,
        ),
        body: ListView.builder(
          scrollDirection: Axis.vertical,
          padding: EdgeInsets.fromLTRB(12.0, 20.0, 12.0, 20.0),
          itemCount: listText.length,
          itemBuilder: (context, index) {
            return listText.elementAt(index);
          },
        ));
  }

  void createParagraph(String context) {
    int lastParent = 0;
    for (int i = 0; i < context.length; i++) {
      String x = context.substring(i, i + 2);
      switch (context.substring(i, i + 2)) {
        case "~1":
          {
            i = addText1(context, i + 2);
            break;
          }
        case "~2":
          {
            i = addText2(context, i + 2);
            lastParent = 2;
            break;
          }
        case "~3":
          {
            i = addText3(context, i + 2);
            lastParent = 3;
            break;
          }

        case "~5":
          {
            i = addText5(context, i + 2);
            break;
          }
        case "~6":
          {
            addEmptyLine();
            i++;
            break;
          }
      }
    }
  }

  int addText1(String context, int startIndex) {
    String text = "";

    if ((startIndex + 1) < context.length) {
      while (context.substring(startIndex, startIndex + 1) != '~') {
        text += context.substring(startIndex, startIndex + 1);
        startIndex++;
      }
    }
//    text += "\n";
    listText.add(Padding(padding: EdgeInsets.only(),
      child: RichText(
        text: TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.orange,
              fontSize: 30.0,
            )),
      ),));
    startIndex++;
    return startIndex;
  }

  int addText2(String context, int startIndex) {
    String text = "";
    List<TextSpan> listTextSpan = new List<TextSpan>();
    if ((startIndex + 1) < context.length) {
      while (context.substring(startIndex, startIndex + 1) != '~') {
        text += context.substring(startIndex, startIndex + 1);
        startIndex++;
      }
    }

    listTextSpan.add(TextSpan(
        text: text,
        style: TextStyle(
          color: Colors.black,
          fontSize: 20.0,
        )));

    startIndex++;
    if ((startIndex + 1) < context.length) {
      if (context.substring(startIndex, startIndex + 1) == '4') {
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
        startIndex++;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex += 1;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
                color: Colors.black,
                fontSize: 20.0,
                fontWeight: FontWeight.w700)));
        startIndex += 2;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex++;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
      }
      startIndex++;
    }

    listText.add(Padding(padding: EdgeInsets.only(),
      child: RichText(text: TextSpan(children: listTextSpan)),));
    return startIndex;
  }

  int addText3(String context, int startIndex) {
    String text = "";
    List<TextSpan> listTextSpan = new List<TextSpan>();
    if ((startIndex + 1) < context.length) {
      while (context.substring(startIndex, startIndex + 1) != '~') {
        text += context.substring(startIndex, startIndex + 1);
        startIndex++;
      }
    }

    listTextSpan.add(TextSpan(
        text: text,
        style: TextStyle(
          color: Colors.black,
          fontSize: 20.0,
        )));

    startIndex++;
    if ((startIndex + 1) < context.length) {
      if (context.substring(startIndex, startIndex + 1) == '4') {
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
        startIndex++;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex += 1;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
                color: Colors.black,
                fontSize: 20.0,
                fontWeight: FontWeight.w700)));
        startIndex += 2;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex++;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
        startIndex++;
      }
    }

    listText.add(Padding(
      padding: EdgeInsets.only(left: 20.0),
      child: RichText(text: TextSpan(children: listTextSpan)),
    ));
    return startIndex;
  }

//  int addText4(String context, int startIndex, int lastParent) {
//    String text = "";
//    while (context.substring(startIndex, startIndex + 1) != '~') {
//      text += context.substring(startIndex, startIndex + 1);
//      startIndex++;
//    }
//    if (lastParent == 2) {
//      listText.add(TextSpan(
//          text: text,
//          style: TextStyle(
//              color: Colors.black,
//              fontWeight: FontWeight.w900,
//              fontSize: 25.0)));
//    } else {
//      listText.add(TextSpan(
//          text: text,
//          style: TextStyle(
//              color: Colors.black,
//              fontWeight: FontWeight.w400,
//              fontSize: 20.0)));
//    }
//
//    startIndex++;
//    return startIndex;
//  }

  int addText5(String context, int startIndex) {
    String text = "";
    List<TextSpan> listTextSpan = new List<TextSpan>();
    if ((startIndex + 1) < context.length) {
      while (context.substring(startIndex, startIndex + 1) != '~') {
        text += context.substring(startIndex, startIndex + 1);
        startIndex++;
      }
    }

    listTextSpan.add(TextSpan(
        text: text,
        style: TextStyle(
          color: Colors.black,
          fontSize: 20.0,
        )));

    startIndex++;
    if ((startIndex + 1) < context.length) {
      if (context.substring(startIndex, startIndex + 1) == '4') {
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
        startIndex++;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex += 1;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
                color: Colors.black,
                fontSize: 20.0,
                fontWeight: FontWeight.w700)));
        startIndex += 2;
        text = "";

        if ((startIndex + 1) < context.length) {
          while (context.substring(startIndex, startIndex + 1) != '~') {
            text += context.substring(startIndex, startIndex + 1);
            startIndex++;
          }
        }
        listTextSpan.add(TextSpan(
            text: text,
            style: TextStyle(
              color: Colors.black,
              fontSize: 20.0,
            )));
        startIndex++;
      }
    }

    listText.add(Padding(
      padding: EdgeInsets.only(left: 40.0),
      child: RichText(text: TextSpan(children: listTextSpan)),
    ));
    return startIndex;
  }

  void addEmptyLine() {
    listText.add(SizedBox(
      height: 20.0,
    ));
  }
}
