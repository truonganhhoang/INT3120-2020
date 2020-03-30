import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_detail.dart';

class Sentence {
  String title;
  String subTitle;

  Sentence({ this.title, this.subTitle });
}

class SentencePage extends StatefulWidget {
  @override
  _SentencePageState createState() => _SentencePageState();
}

class _SentencePageState extends State<SentencePage> {

  List<Sentence> sentences = [
    Sentence(title: 'Sentence Title 1', subTitle: 'Sentence subTitle 1'),
    Sentence(title: 'Sentence Title 2', subTitle: 'Sentence subTitle 2'),
    Sentence(title: 'Sentence Title 3', subTitle: 'Sentence subTitle 3'),
    Sentence(title: 'Sentence Title 4', subTitle: 'Sentence subTitle 4'),
    Sentence(title: 'Sentence Title 5', subTitle: 'Sentence subTitle 5'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
        child: ListView.builder(
          itemCount: sentences.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                leading: Text('${index + 1}'),
                title: Text(sentences[index].title),
                subtitle: Text(sentences[index].subTitle),
                trailing: Icon(Icons.arrow_forward_ios),
                onTap: () {
                  Navigator.push(
                    context,
                    new MaterialPageRoute(
                      builder: (context) => GrammarDetail(),
                      settings: RouteSettings(
                        arguments: {
                          'title': sentences[index].title,
                          'subTitle': sentences[index].subTitle
                        }
                      )
                    ),
                  );
                },
              ),
            );
          }
        ),
      ),
    );
  }
}
