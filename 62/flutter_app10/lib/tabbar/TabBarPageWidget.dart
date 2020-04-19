import 'package:flutter/material.dart';
import 'package:flutterapp10/tabbar/GSYTabBarWidget.dart';
import 'package:flutterapp10/tabbar/TabBarPageFirst.dart';
import 'package:flutterapp10/tabbar/TabBarPageFour.dart';
import 'package:flutterapp10/tabbar/TabBarPageSecond.dart';
import 'package:flutterapp10/tabbar/TabBarPageSix.dart';
import 'package:flutterapp10/tabbar/TabBarPageThree.dart';
import 'package:flutterapp10/tabbar/TabBarPageFive.dart';
import 'package:flutterapp10/tabbar/TabBarPageSix.dart';


/**
 * Created by guoshuyu
 * on 2018/7/29.
 */

class TabBarPageWidget extends StatefulWidget {
  @override
  _TabBarPageWidgetState createState() => _TabBarPageWidgetState();
}

class _TabBarPageWidgetState extends State<TabBarPageWidget> {
  final PageController topPageControl = new PageController();

  final List<String> tab = ["BIỂN BÁO CẤM", "BIỂN BÁO NGUY HIỂM", "BIỂN BÁO HIỆU LỆNH", "BIỂN BÁO CHỈ DẪN", "BIỂN BÁO PHỤ", "VẠCH KẺ ĐƯỜNG"];

  _renderTab() {
    List<Widget> list = new List();
    for (int i = 0; i < tab.length; i++) {
      list.add(new FlatButton(onPressed: () {
        topPageControl.jumpTo(MediaQuery
            .of(context)
            .size
            .width * i);
      }, child: new Text(
        tab[i],
        maxLines: 1,
      )));
    }
    return list;
  }

  _renderPage() {
    return  [
      new TabBarPageFirst(),
      new TabBarPageSecond(),
      new TabBarPageThree(),
      new TabBarPageFour(),
      new TabBarPageFive(),
      new TabBarPageSix(),

    ];
  }

  @override
  Widget build(BuildContext context) {
    return new GSYTabBarWidget(
        type: GSYTabBarWidget.TOP_TAB,
        tabItems: _renderTab(),
        tabViews: _renderPage(),
        topPageControl: topPageControl,
        backgroundColor: Colors.lightBlue,
        indicatorColor: Colors.white,
        title: new Text("Test"));
  }
}