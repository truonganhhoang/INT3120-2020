import 'dart:convert';
import 'package:http/http.dart';

class WordSearch {

  String word;
  String lang;
  List values;

  WordSearch({ this.word, this.lang });

  Future<void> getTranslate() async {
    try{
      Response response = await get('https://api.tracau.vn/WBBcwnwQpV89/s/$word/$lang');
      Map data = jsonDecode(response.body);

      List translates = data['sentences'];
      values = translates;
    }
    catch(e) {
      values = [];
    }
  }
}
