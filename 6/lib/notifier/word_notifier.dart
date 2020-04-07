import 'dart:collection';

import 'package:CWCFlutter/model/word.dart';
import 'package:flutter/cupertino.dart';

class WordNotifier with ChangeNotifier {
  List<Food> _foodList = [];
  Food _currentFood;

  UnmodifiableListView<Food> get foodList => UnmodifiableListView(_foodList);
  List<String> getWords(){
    List<String> _words = [];
    for(int i = 0; i < foodList.length ; i++){
      _words[i] = foodList[i].name;
      print(_words[i]);
    }
    return _words;
  }
  Food get currentFood => _currentFood;

  set foodList(List<Food> foodList) {
    _foodList = foodList;
    notifyListeners();
  }

  set currentFood(Food food) {
    _currentFood = food;
    notifyListeners();
  }

  addFood(Food food) {
    _foodList.insert(0, food);
    notifyListeners();
  }

  deleteFood(Food food) {
    _foodList.removeWhere((_food) => _food.id == food.id);
    notifyListeners();
  }
}
