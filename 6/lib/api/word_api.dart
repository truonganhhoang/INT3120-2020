import 'package:CWCFlutter/model/word.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

getListWords(WordNotifier wordNotifier, var name) async {
  QuerySnapshot snapshot = await Firestore.instance
      .collection(name)
      .orderBy("createdAt", descending: true)
      .getDocuments();

  List<Word> _wordList = [];

  snapshot.documents.forEach((document) {
    Word word = Word.fromMap(document.data);
    _wordList.add(word);
  });

  wordNotifier.wordList = _wordList;
}
