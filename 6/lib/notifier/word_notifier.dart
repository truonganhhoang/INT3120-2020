import 'dart:collection';

import 'package:CWCFlutter/model/word.dart';
import 'package:flutter/cupertino.dart';

class WordNotifier with ChangeNotifier {
  List<Word> _wordList = [];
  Word _currentWord;

  UnmodifiableListView<Word> get wordList => UnmodifiableListView(_wordList);
  Word get currentWord => _currentWord;

  set wordList(List<Word> wordList) {
    _wordList = wordList;
    notifyListeners();
  }

  set currentWord(Word Word) {
    _currentWord = Word;
    notifyListeners();
  }

}
