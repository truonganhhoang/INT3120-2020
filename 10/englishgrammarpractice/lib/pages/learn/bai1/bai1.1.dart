import 'package:flutter/material.dart';

class Bai11 extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Hiện tại đơn'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              title:Text('1. KHÁI NIỆM',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold), ),
            ),
            Text('  Thì hiện tại đơn (Simple Present tense) là thì dùng để diễn đạt một hành động mang tính thường xuyên (regular action), theo thói quen (habitual action) hoặc hành động lặp đi lặp lại có tính quy luật, hoặc diễn tả chân lý và sự thật hiển nhiên.',style: TextStyle(fontSize: 18)),
            Text('\n'),
            Text('Ví dụ:',style: TextStyle(fontSize: 16,fontWeight: FontWeight.bold)),
            Text(' - I walk to school every day. ( Tôi đi học hằng ngày)',style: TextStyle(fontSize: 18)),
            Text(' - He often plays soccer. (Anh ấy thường xuyên chơi bóng đá)',style: TextStyle(fontSize: 18)),
            RaisedButton(
            child: Text('Quay lại'),
            onPressed: () => Navigator.pop(context),
            )
            
          ]
      )
    );
  }
}
