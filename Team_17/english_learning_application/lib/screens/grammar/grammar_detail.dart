import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_result_page.dart';

class Detail {
  String title;
  String subTitle;

  Detail({this.title, this.subTitle});
}

class GrammarDetail extends StatefulWidget {
  @override
  _GrammarDetailState createState() => _GrammarDetailState();
}

class _GrammarDetailState extends State<GrammarDetail> {
  List<Detail> details = [
    Detail(title: 'Detail Title 1', subTitle: 'Detail subTitle 1'),
    Detail(title: 'Detail Title 2', subTitle: 'Detail subTitle 2'),
    Detail(title: 'Detail Title 3', subTitle: 'Detail subTitle 3'),
    Detail(title: 'Detail Title 4', subTitle: 'Detail subTitle 4'),
    Detail(title: 'Detail Title 5', subTitle: 'Detail subTitle 5'),
  ];

  Map data = {};

  @override
  Widget build(BuildContext context) {
    data = ModalRoute.of(context).settings.arguments;

    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.green[700],
          title: Text(data['title']),
          elevation: 0,
        ),
        body: Padding(
            padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
            child: StreamBuilder(
                stream: Firestore.instance.collection("Sentence1").snapshots(),
                builder: (context, snapshot) {
                  if (!snapshot.hasData) return Text("Loading...");
                  return ListView.builder(
                      itemCount: snapshot.data.documents.length,
                      itemBuilder: (context, index) {
                        return Card(
                          child: ListTile(
                            title: Text(snapshot.data.documents[index]['name']),
//                  subtitle: Text(details[index].subTitle),
                            trailing: Icon(Icons.arrow_forward_ios),
                            onTap: () {
                              Navigator.push(
                                context,
                                new MaterialPageRoute(
                                    builder: (context) => GrammarResult(),
                                    settings: RouteSettings(arguments: {
                                      'title': snapshot.data.documents[index]
                                          ['name'],
                                      'subTitle': snapshot.data.documents[index]
                                          ['detail']
                                    })),
                              );
                            },
                          ),
                        );
                      });
                })));
//                Card(
//                child: ListTile(
//                  title: Text(details[index].title),
//                  subtitle: Text(details[index].subTitle),
//                  trailing: Icon(Icons.arrow_forward_ios),
//                  onTap: () {
//                    Navigator.push(
//                      context,
//                      new MaterialPageRoute(
//                          builder: (context) => GrammarResult(),
//                          settings: RouteSettings(
//                              arguments: {
//                                'title': details[index].title,
//                                'subTitle': details[index].subTitle
//                              }
//                          )
//                      ),
//                    );
//                  },
//                ),
//
  }
}
