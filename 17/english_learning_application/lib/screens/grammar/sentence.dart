import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_detail.dart';
import 'grammar_result_page.dart';

class SentencePage extends StatefulWidget {
  @override
  _SentencePageState createState() => _SentencePageState();
}

class _SentencePageState extends State<SentencePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
        child: StreamBuilder(
            stream: Firestore.instance.collection("lc").snapshots(),
            builder: (context, snapshot) {
              if (!snapshot.hasData) return Text("");
              return ListView.builder(
                  itemCount: snapshot.data.documents.length,
                  itemBuilder: (context, index) {
                    return Card(
                      child: ListTile(
                        leading: Text('${index + 1}',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        title: Text(snapshot.data.documents[index]['title'],
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        subtitle: Text(snapshot.data.documents[index]['subtitle'],
                          overflow: TextOverflow.ellipsis,
                        ),
                        trailing: Icon(Icons.arrow_forward_ios),
                        onTap: () {
                          if(snapshot.data.documents[index]['has_child']){
                            Navigator.push(
                              context,
                              new MaterialPageRoute(
                                  builder: (context) => GrammarDetail(),
                                  settings: RouteSettings(arguments: {
                                    'title': snapshot.data.documents[index]
                                    ['title'],
                                    'child': snapshot.data.documents[index]
                                    ['child']
                                  })),
                            );
                          }
                          else{
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
                          }
                        },
                      ),
                    );
                  });
            })
      ),
    );
  }
}
