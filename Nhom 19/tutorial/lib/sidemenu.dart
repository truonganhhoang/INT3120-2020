import 'package:flutter/material.dart';
import 'startquiz.dart';
import 'package:tutorial/basicknowledge/basicwindow.dart';

class NavDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(
              'Side menu',
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
            decoration: BoxDecoration(
                color: Colors.green,
                image: DecorationImage(
                    fit: BoxFit.fill,
                    image: AssetImage('images/cover.jpg'))),
          ),
          ListTile(
            leading: Icon(Icons.home),
            title: Text('Trang chủ'),
            onTap: () => {},
          ),
          ListTile(
            leading: Icon(Icons.account_box),
            title: Text('Thông tin cá nhân'),
            onTap: () => {Navigator.of(context).pop()},
          ),
            ListTile(
            leading: Icon(Icons.class_),
            title: Text('Lý thuyết'),
            onTap: () {
              Navigator.of(context).pop();
              Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) => new BasicWindow()));
            },
          ),
            ListTile(
            leading: Icon(Icons.content_paste),
            title: Text('Thực hành'),
            onTap: ()  {
              Navigator.of(context).pop();
              Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) => new QuizGame()));
            },
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('Cài đặt'),
            onTap: () => {Navigator.of(context).pop()},
          ),
          ListTile(
            leading: Icon(Icons.border_color),
            title: Text('Ý kiến phản hồi'),
            onTap: () => {Navigator.of(context).pop()},
          ),
          ListTile(
            leading: Icon(Icons.exit_to_app),
            title: Text('Đăng xuất'),
            onTap: () => {Navigator.of(context).pop()},
          ),
        ],
      ),
    );
  }
}