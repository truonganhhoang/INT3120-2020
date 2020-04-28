import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_result_page.dart';

class GrammarDetail extends StatefulWidget {
  @override
  _GrammarDetailState createState() => _GrammarDetailState();
}

class _GrammarDetailState extends State<GrammarDetail> {
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
                stream:
                    Firestore.instance.collection(data['child']).snapshots(),
                builder: (context, snapshot) {
                  if (!snapshot.hasData) return Text("");
                  return ListView.builder(
                      itemCount: snapshot.data.documents.length,
                      itemBuilder: (context, index) {
                        return Card(
                          child: ListTile(
                            title: Text(snapshot.data.documents[index]['title'],
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                            subtitle: Text(snapshot.data.documents[index]['subtitle'],
                              overflow: TextOverflow.ellipsis,
                            ),
                            trailing: Icon(Icons.arrow_forward_ios),
                            onTap: () {
                              Navigator.push(
                                context,
                                new MaterialPageRoute(
                                    builder: (context) => GrammarResult(),
                                    settings: RouteSettings(arguments: {
                                      'title': snapshot.data.documents[index]
                                          ['title'],
                                      'context': snapshot.data.documents[index]
                                      ['context']
                                    })),
                              );
                            },
                          ),
                        );
                      });
                })));
  }
}
