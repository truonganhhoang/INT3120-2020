import 'package:flutter/material.dart';

class CauPageView extends StatelessWidget {
  final title = "Câu";
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      body: ListView.builder(
        itemBuilder: (context, index) {
          return Card(
              child: ListTile(
                  title: Text(index.toString()),
                  trailing: Icon(Icons.favorite, color: Colors.red),
                  subtitle: Text("Đây là subtitle của " + index.toString()),
                  onTap: () {}));
        },
      ),
    );
  }
}

//              setState(() {
//                if (isTym) {
//                  setTym.remove(index);
//                } else {
//                  setTym.add(index);
//                }
