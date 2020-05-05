import 'dart:collection';

import 'package:CWCFlutter/model/word.dart';
import 'package:flutter/cupertino.dart';

class WordNotifier with ChangeNotifier {
  List<Word> _wordList = [];
  Word _currentWord;
  List<String> _user = [];

  UnmodifiableListView<Word> get wordList => UnmodifiableListView(_wordList);

  Word get currentWord => _currentWord;

  set wordList(List<Word> wordList) {
    _wordList = wordList;
    notifyListeners();
  }

  set userList(List<String> user) {
    _user = user;
    notifyListeners();
  }

  set currentWord(Word word) {
    _currentWord = word;
    notifyListeners();
  }
}
