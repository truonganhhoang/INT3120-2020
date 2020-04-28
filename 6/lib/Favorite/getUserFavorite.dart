import 'package:CWCFlutter/model/word.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Favorite {
  List<String> _userList = [];
  String _useUpdate = "";
  List<String> colletion = [];
  String a = "Animals,Describing the weather,People and relationships,Vegetables,Houses";

  void addcollection() {
    colletion = a.split(",");
  }

  void convert() {
    _userList.forEach((f) => _useUpdate = _useUpdate + f + ",");
  }

  bool checkUser(String user, String email) {
    _userList = user.split(',');
    return _userList.contains(email);
  }

  void remove(String user, String email, Word word, var ten) {
    if (checkUser(user, email)) {
      _userList.remove(email);
      _userList.remove("");
      convert();
      updateuser(word, ten);
    }
  }

  void add(String user, String email, Word word, var ten) {
    _userList.add(email);
    _userList.remove("");
    convert();
    updateuser(word, ten);
  }

  Future<void> updateuser(Word word, var ten) async {
    CollectionReference foodRef = Firestore.instance.collection(ten);
    word.user = _useUpdate;
    await foodRef.document(word.id).updateData(word.toMap());
    word.updatedAt = Timestamp.now();
    await foodRef.document(word.id).updateData(word.toMap());
  }

  void getFavoriteWords(WordNotifier wordNotifier, String email) async {
    List<Word> _wordListFavorite = [];
    addcollection();
    int i = 0;
    do {
      QuerySnapshot snapshot = await Firestore.instance
          .collection(colletion[i])
          .orderBy("createdAt", descending: true)
          .getDocuments();
      snapshot.documents.forEach((document) {
        Word word = Word.fromMap(document.data);
        if (word.user.contains(email)) {
          _wordListFavorite.add(word);
        }
      });
      i++;
    } while (i < colletion.length);
    wordNotifier.wordList = _wordListFavorite;
  }
}
