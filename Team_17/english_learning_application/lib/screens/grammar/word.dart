import 'package:flutter/material.dart';
import 'package:grammarandvocabulary/screens/grammar/grammar_detail.dart';

class Word {
  String title;
  String subTitle;

  Word({ this.title, this.subTitle });
}

class WordPage extends StatefulWidget {
  @override
  _WordPageState createState() => _WordPageState();
}

class _WordPageState extends State<WordPage> {

  List<Word> words = [
    Word(title: 'Word Title 1', subTitle: 'Word subTitle 1'),
    Word(title: 'Word Title 2', subTitle: 'Word subTitle 2'),
    Word(title: 'Word Title 3', subTitle: 'Word subTitle 3'),
    Word(title: 'Word Title 4', subTitle: 'Word subTitle 4'),
    Word(title: 'Word Title 5', subTitle: 'Word subTitle 5'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
        child: ListView.builder(
          itemCount: words.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                leading: Text('${index + 1}'),
                title: Text(words[index].title),
                subtitle: Text(words[index].subTitle),
                trailing: Icon(Icons.arrow_forward_ios),
                onTap: () {
                  Navigator.push(
                    context,
                    new MaterialPageRoute(
                      builder: (context) => GrammarDetail(),
                      settings: RouteSettings(
                        arguments: {
                          'title': words[index].title,
                          'subTitle': words[index].subTitle
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
