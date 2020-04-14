import 'package:flutter/material.dart';


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
            Text('Thành viên nhóm 10 gồm có : ',style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold)),
            
            Text('1. 17020680 - Cao Quý Đăng',style: TextStyle(fontSize: 16)),
            Text('2. 17020190 - Sụ phít Phôm ma chăn',style: TextStyle(fontSize: 16)),
            Text('3. 17020658 - Nguyễn Xuân Dương',style: TextStyle(fontSize: 16)),
            Text('\n'),
            Text('"Bài Tập Ngữ Pháp Tiếng Anh Có Giải Thích"',style: TextStyle(fontSize: 16,fontWeight: FontWeight.bold)),
            
          
            Text('Đó là tên ứng dụng của chúng tôi, trong ứng dụng đó người dùng có thể :',style: TextStyle(fontSize: 16)),
            Text('1. Tra cứu các công thức ngữ pháp tiếng Anh',style: TextStyle(fontSize: 16)),
          
            Text('2. Làm bài tập ngữ pháp tiếng anh có hướng dẫn giải',style: TextStyle(fontSize: 16)),
            Text('3. học lý thuyết ngữ pháp tiếng Anh',style: TextStyle(fontSize: 16)),
            Text('4. Kiểm tra, ghi nhớ ngữ pháp lâu hơn thông qua các bài kiểm tra tổng hợp',style: TextStyle(fontSize: 16)),
            Text('\n'),
            
            RaisedButton(
            child: Text('Quay lại'),
            onPressed: () => Navigator.pop(context),
            )
            
          ]
      )
    );
    
  }
}