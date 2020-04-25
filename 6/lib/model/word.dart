import 'package:cloud_firestore/cloud_firestore.dart';

class Word {
  String id;
  String name;
  String category;
  String image;
  String spelling;
  List subIngredients = [];
  Timestamp createdAt;
  Timestamp updatedAt;
  String user;

  Word();

  Word.fromMap(Map<String, dynamic> data) {
    id = data['id'];
    name = data['name'];
    category = data['category'];
    image = data['image'];
    subIngredients = data['subIngredients'];
    createdAt = data['createdAt'];
    updatedAt = data['updatedAt'];
    spelling = data['spelling'];
    user = data['user'];
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'category': category,
      'image': image,
      'subIngredients': subIngredients,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
      'spelling': spelling,
      'user': user,
    };
  }
}
