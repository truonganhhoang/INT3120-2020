import 'dart:io';

import 'package:CWCFlutter/model/word.dart';
import 'package:CWCFlutter/model/user.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/product.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:path/path.dart' as path;
import 'package:uuid/uuid.dart';
class name extends StatefulWidget {
  @override
  _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  var product_list = [
    {
      "name": "Foods",
      "picture": "images/Woman.jpeg",
      "old_price": 120,
      "price": 85,
    },
    {
      "name": "The Family",
      "picture": "images/head.jpg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Vegetables",
      "picture": "images/grapefruit.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Fuit",
      "picture": "images/ham.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Meat, Poultry, and Seafood",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "The Supermarket",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Restaurant and Cocktail Lounge",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Restaurant Verbs",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },

  ];

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
        itemCount: product_list.length,
        gridDelegate:
        new SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
        itemBuilder: (BuildContext context, int index) {
          return Single_prod(
            prod_name: product_list[index]['name'],
            prod_pricture: product_list[index]['picture'],
            prod_old_price: product_list[index]['old_price'],
            prod_price: product_list[index]['price'],
          );
        });
  }
}

class Single_prod extends StatelessWidget {
  final prod_name;
  final prod_pricture;
  final prod_old_price;
  final prod_price;

  Single_prod({
    this.prod_name,
    this.prod_pricture,
    this.prod_old_price,
    this.prod_price,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
var ok = new Single_prod();
//hết phần thêm vào
login(User user, AuthNotifier authNotifier, Function onSuccess, Function(String) onSignInError) async {
  AuthResult authResult = await FirebaseAuth.instance
      .signInWithEmailAndPassword(email: user.email, password: user.password)
      .catchError((error) {
      onSignInError("Sign-In fail, please try again");});

  if (authResult != null) {
    FirebaseUser firebaseUser = authResult.user;

    if (firebaseUser != null) {
      print("Log In: $firebaseUser");
      authNotifier.setUser(firebaseUser);
    }
  }
}
 resetemail(String email, AuthNotifier authNotifier) async{
  final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;
  signout(authNotifier);
    return _firebaseAuth.sendPasswordResetEmail(email: email);
}

signup(User user, AuthNotifier authNotifier) async {
  AuthResult authResult = await FirebaseAuth.instance
      .createUserWithEmailAndPassword(email: user.email, password: user.password)
      .catchError((error) => print(error.code));

  if (authResult != null) {
    UserUpdateInfo updateInfo = UserUpdateInfo();
    updateInfo.displayName = user.displayName;

    FirebaseUser firebaseUser = authResult.user;

    if (firebaseUser != null) {
      await firebaseUser.updateProfile(updateInfo);

      await firebaseUser.reload();

      print("Sign up: $firebaseUser");

      FirebaseUser currentUser = await FirebaseAuth.instance.currentUser();
      authNotifier.setUser(currentUser);
    }
  }
}



signout(AuthNotifier authNotifier) async {
  await FirebaseAuth.instance.signOut().catchError((error) => print(error.code));

  authNotifier.setUser(null);
}

initializeCurrentUser(AuthNotifier authNotifier) async {
  FirebaseUser firebaseUser = await FirebaseAuth.instance.currentUser();

  if (firebaseUser != null) {
    print(firebaseUser);
    authNotifier.setUser(firebaseUser);
  }
}

getFoods(WordNotifier foodNotifier) async {
  QuerySnapshot snapshot = await Firestore.instance
      .collection('Foods')
      .orderBy("createdAt", descending: true)
      .getDocuments();

  List<Food> _foodList = [];

  snapshot.documents.forEach((document) {
    Food food = Food.fromMap(document.data);
    _foodList.add(food);
  });

  foodNotifier.foodList = _foodList;
}

uploadFoodAndImage(Food food, bool isUpdating, File localFile, Function foodUploaded) async {
  if (localFile != null) {
    print("uploading image");

    var fileExtension = path.extension(localFile.path);
    print(fileExtension);

    var uuid = Uuid().v4();

    final StorageReference firebaseStorageRef =
        FirebaseStorage.instance.ref().child('foods/images/$uuid$fileExtension');

    await firebaseStorageRef.putFile(localFile).onComplete.catchError((onError) {
      print(onError);
      return false;
    });

    String url = await firebaseStorageRef.getDownloadURL();
    print("download url: $url");
    _uploadFood(food, isUpdating, foodUploaded, imageUrl: url);
  } else {
    print('...skipping image upload');
    _uploadFood(food, isUpdating, foodUploaded);
  }
}

_uploadFood(Food food, bool isUpdating, Function foodUploaded, {String imageUrl}) async {
  CollectionReference foodRef = Firestore.instance.collection('Foods');

  if (imageUrl != null) {
    food.image = imageUrl;
  }

  if (isUpdating) {
    food.updatedAt = Timestamp.now();

    await foodRef.document(food.id).updateData(food.toMap());

    foodUploaded(food);
    print('updated food with id: ${food.id}');
  } else {
    food.createdAt = Timestamp.now();

    DocumentReference documentRef = await foodRef.add(food.toMap());

    food.id = documentRef.documentID;

    print('uploaded food successfully: ${food.toString()}');

    await documentRef.setData(food.toMap(), merge: true);

    foodUploaded(food);
  }
}

deleteFood(Food food, Function foodDeleted) async {
  if (food.image != null) {
    StorageReference storageReference =
        await FirebaseStorage.instance.getReferenceFromUrl(food.image);

    print(storageReference.path);

    await storageReference.delete();

    print('image deleted');
  }

  await Firestore.instance.collection('Foods').document(food.id).delete();
  foodDeleted(food);
}
