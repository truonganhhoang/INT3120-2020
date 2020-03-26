import 'package:flutter/material.dart';

class TuPageView extends StatelessWidget {
  final title = "Từ";
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      body: ListView.builder(
        itemBuilder: (context, index) {
          return Card(
              child: ListTile(
                  title: Text(index.toString()),
                  trailing: Icon(Icons.favorite_border, color: Colors.green),
                  subtitle: Text("Đây là subtitle của " + index.toString()),
                  onTap: () {}));
        },
      ),
    );
  }
}