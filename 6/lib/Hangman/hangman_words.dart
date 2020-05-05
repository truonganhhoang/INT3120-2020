import 'dart:math';
import 'package:CWCFlutter/model/word.dart';
import 'package:cloud_firestore/cloud_firestore.dart';


class HangmanWords {
  int wordCounter = 0;
  List<int> _usedNumbers = [];
  List<String> _words = [];
  List<String> colletion = [];

  Future readWords() async {
    colletion.add("Animals");
    colletion.add("Describing the weather");
    colletion.add("Foods");
    colletion.add("Houses");
    colletion.add("People and relationships");
    colletion.add("The Family");
    colletion.add("Vegetables");
    colletion.add("supermarket");
    int i = 0;
    do {
      QuerySnapshot snapshot = await Firestore.instance
          .collection(colletion[i])
          .orderBy("createdAt", descending: true)
          .getDocuments();
      snapshot.documents.forEach((document) {
        Word word = Word.fromMap(document.data);
        _words.add(word.name);
      });
      i++;
    } while (i < colletion.length);
  }

  void resetWords() {
    wordCounter = 0;
    _usedNumbers = [];
//    _words = [];
  }

  // ignore: missing_return
  String getWord() {
    wordCounter += 1;
    var rand = Random();
    int wordLength = _words.length;
    int randNumber = rand.nextInt(wordLength);
    bool notUnique = true;
    if (wordCounter - 1 == _words.length) {
      notUnique = false;
      return '';
    }
    while (notUnique) {
      if (!_usedNumbers.contains(randNumber)) {
        notUnique = false;
        _usedNumbers.add(randNumber);
        return _words[randNumber];
      } else {
        randNumber = rand.nextInt(wordLength);
      }
    }
  }

  String getHiddenWord(int wordLength) {
    String hiddenWord = '';
    for (int i = 0; i < wordLength; i++) {
      hiddenWord += '_';
    }
    return hiddenWord;
  }
}
