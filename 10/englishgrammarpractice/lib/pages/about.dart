import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn.dart';

class About extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
        appBar: AppBar(
        title: Text('Về chúng tôi'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.info, color: Colors.lightBlue),
              title:Text('Môn phát triển ứng dụng di động',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold), ),
            ),
            Text('Thành viên nhóm 10 gồm có : ',style: TextStyle(fontSize: 18)),
            
            Text('1. 17020680 - Cao Quý Đăng',style: TextStyle(fontSize: 16)),
            Text('2. 17020190 - Sụ phít Phôm ma chăn',style: TextStyle(fontSize: 16)),
            Text('3. 17020658 - Nguyễn Xuân Dương',style: TextStyle(fontSize: 16)),
            Text('\n'),
            Text('"Bài Tập Ngữ Pháp Tiếng Anh Có Giải Thích"',style: TextStyle(fontSize: 18)),
          
            ListTile(
              title:Text('Đó là tên ứng dụng của chúng tôi, trong ứng dụng đó người dùng có thể :'),
            ),
            ListTile(
              title:Text('1. - Tra cứu các công thức ngữ pháp tiếng Anh, học lý thuyết ngữ pháp tiếng Anh'),
            ),
            ListTile(
              title:Text('2. - Làm cài bài tập ngữ pháp tiếng anh có hướng dẫn giải'),
            ),
            ListTile(
              title:Text('3. - Kiểm tra, ghi nhớ ngữ pháp lâu hơn thông qua các bài kiểm tra tổng hợp'),
            ),
            
            RaisedButton(
            child: Text('Back'),
            onPressed: () => Navigator.pop(context),
            )
            
          ]
      )
    );
    
  }
}