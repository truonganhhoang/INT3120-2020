
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

class TuDienPageView extends StatefulWidget {
  final title = "Tu Dien";
  @override
  TuDienPageViewState createState() => TuDienPageViewState();
}

class TuDienPageViewState extends State<TuDienPageView> {
  final controller = PageController();
  final sizedBoxSpace = SizedBox(height: 24);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text("Từ Điển"),
      ),
      body: Form(
//    autovalidate: _autoValidate,
          child: SingleChildScrollView(
              dragStartBehavior: DragStartBehavior.down,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  sizedBoxSpace,
                  TextFormField(
                    cursorColor: Colors.grey,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: "Nhap tu",
                    ),
                    maxLines: 5,
                    minLines: 3,
                  ),

                  sizedBoxSpace,
                  Row(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      RaisedButton(
                        child: Text("Viet - Anh"),
                      ),
                      SizedBox(width: 40,),
                      RaisedButton(
                        child: Text("Anh - Viet"),
                      ),
                    ],
                  ),

                  sizedBoxSpace,
                  Container(
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: Color(0xFF000000),
                        width: 1.0,
                        style: BorderStyle.solid,
                      ),
                      borderRadius: BorderRadius.circular(4.0),
                    ),
                    child: Text("data"),
                  ),
                ],
              ))),
    );
  }
}
