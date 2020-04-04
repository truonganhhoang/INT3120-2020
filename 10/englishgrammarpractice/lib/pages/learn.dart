
import 'package:flutter/material.dart';
import 'package:englishgrammarpractice/pages/learn/bai1.dart';
import 'package:englishgrammarpractice/pages/learn/bai2.dart';
import 'package:englishgrammarpractice/pages/learn/bai3.dart';
import 'package:englishgrammarpractice/pages/learn/bai4.dart';
import 'package:englishgrammarpractice/pages/learn/bai5.dart';
import 'package:englishgrammarpractice/pages/learn/bai6.dart';
import 'package:englishgrammarpractice/pages/learn/bai7.dart';
import 'package:englishgrammarpractice/pages/learn/bai8.dart';
import 'package:englishgrammarpractice/pages/learn/bai9.dart';
import 'package:englishgrammarpractice/pages/learn/bai10.dart';
import 'package:englishgrammarpractice/pages/learn/bai11.dart';
import 'package:englishgrammarpractice/pages/learn/bai12.dart';
import 'package:englishgrammarpractice/pages/learn/bai13.dart';
import 'package:englishgrammarpractice/pages/learn/bai14.dart';
import 'package:englishgrammarpractice/pages/learn/bai15.dart';
import 'package:englishgrammarpractice/pages/learn/bai16.dart';
import 'package:englishgrammarpractice/pages/learn/bai17.dart';
import 'package:englishgrammarpractice/pages/learn/bai18.dart';
import 'package:englishgrammarpractice/pages/learn/bai19.dart';


class Learn extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('Bài tập ngữ pháp tiếng Anh có giải thích'),
      ),
      body: ListView(
          children: <Widget>[
            ListTile(
              leading:Icon(Icons.library_books, color: Colors.lightBlue),
              title:Text('1. Các thì trong tiếng Anh',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai1(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('2. Sự hòa hợp giữa chủ ngữ & động từ',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai2(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books, color: Colors.lightBlue),
              title: Text('3. Danh động từ và động từ nguyên thể',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai3(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('4. Danh từ và đại từ',style: TextStyle(fontSize: 17)),
              onTap: () =>Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai4(),
                  )),

            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('5. Sự cấu tạo từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai5(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('6. Tính từ trạng từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai6(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('7. Các phép so sánh',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai7(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('8. Mạo từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai8(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('9. Động từ khuyết thiếu',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai9(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('10. Câu điều kiện',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai10(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('11. Câu giả định',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai11(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('12. Câu bị động',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai12(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('13. Câi gián tiếp',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai13(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('14. Mệnh đề quan hệ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai14(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('15. Mệnh đề trạng từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai15(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('16. Liên từ trạng từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai16(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('17. Giới từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai17(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('18. Lượng từ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai18(),
                )),
              
            ),
            ListTile(
              leading: Icon(Icons.library_books,color: Colors.lightBlue),
              title: Text('19. Câu đảo ngữ',style: TextStyle(fontSize: 17)),
              onTap: () => Navigator.push(context, MaterialPageRoute(
                  builder: (context) => Bai19(),
                )),
              
            ),
          ]
      )
    );
  }
}