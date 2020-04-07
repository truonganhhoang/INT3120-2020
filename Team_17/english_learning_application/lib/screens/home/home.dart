import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/sentence.dart';
import 'package:englishlearningapplication/screens/grammar/word.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Ngữ pháp'),
          backgroundColor: Colors.green[700],
          elevation: 0,
          bottom: TabBar(
            labelColor: Colors.green[700],
            unselectedLabelColor: Colors.white,
            indicatorSize: TabBarIndicatorSize.label,
            indicator: BoxDecoration(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(10),
                topRight: Radius.circular(10)
              ),
              color: Colors.white,
            ),
            tabs: [
              Tab(
                child: Align(
                  alignment: Alignment.center,
                  child: Text('Câu')
                ),
              ),
              Tab(
                child: Align(
                  alignment: Alignment.center,
                  child: Text('Từ')
                ),
              )
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            SentencePage(),
            WordPage()
          ],
        ),
        drawer: Drawer(
          child: ListView(
            children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: Text(
                  'English Grammar Tutorial',
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.grey[200],
                  ),
                ),
                accountEmail: Text(
                  'nhom17@gmail.com',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.grey[300],
                  ),
                ),
                decoration: BoxDecoration(
                  color: Colors.green[700]
                ),
              ),
              ListTile(
                leading: Icon(Icons.collections_bookmark),
                title: Text('Ngữ pháp tiếng Anh'),
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
              ListTile(
                leading: Icon(Icons.book),
                title: Text('Từ điển Anh - Việt'),
                onTap: () {
                  Navigator.of(context).pop();
                  Navigator.pushNamed(context, '/dictionary');
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
