import 'package:flutter/material.dart';
import 'package:tutorial/sidemenu.dart';


class BasicWindow extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    
    return new BasicWindowState();
  }
}

class BasicWindowState extends State<BasicWindow>{

  List<String> images = [
    "images/lop1.jpg",
    "images/lop2.jpg",
    "images/lop3.png",
    "images/lop4.png",
    "images/lop5.jpg",
  ];

  List<String> des = [
    "Tổng hợp kiến thức cộng và trừ của lớp 1... \n ",
    "Nâng cao hơn lớp 1 là lớp 2...\n",
    "Kiến thức lớp 3 khá rối ren... \n",
    "Kiến thức lớp 4 hông hề khó...\n",
    "Vững chắc kiến thức, không thể cản phả... \nKiến thức lớp 5",
  ];

  List<String> _class =[
    "Lớp 1",
    "Lớp 2",
    "Lớp 3",
    "Lớp 4",
    "Lớp 5",
  ];

  Widget customcard(String whatclass, String image, String des){
    return Padding(
      padding: EdgeInsets.symmetric(
        vertical: 20.0,
        horizontal: 30.0,
      ),
      child: InkWell(
        onTap: (){
        },
        child: Material(
          color: Colors.indigoAccent,
          elevation: 10.0,
          borderRadius: BorderRadius.circular(25.0),
          child: Container(
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.symmetric(
                    vertical: 10.0,
                  ),
                  child: Material(
                    elevation: 5.0,
                    borderRadius: BorderRadius.circular(100.0),
                    child: Container(
                      // changing from 200 to 150 as to look better
                      height: 150.0,
                      width: 150.0,
                      child: ClipOval(
                        child: Image(
                          fit: BoxFit.cover,
                          image: AssetImage(
                            image,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                Center(
                  child: Text(
                    whatclass,
                    style: TextStyle(
                      fontSize: 20.0,
                      color: Colors.white,
                      fontFamily: "Quando",
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
                Container(
                  padding: EdgeInsets.all(20.0),
                  child: Text(
                    des,
                    style: TextStyle(
                      fontSize: 18.0,
                      color: Colors.white,
                      fontFamily: "Alike"
                    ),
                    maxLines: 5,
                    textAlign: TextAlign.justify,
                  ),
                  
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text(
          "Ly Thuyet",
          style: TextStyle(
            fontFamily: "Quando",
          ),
        ),
      ),
      body: ListView(
        children: <Widget>[
          customcard(_class[0], images[0], des[0]),
          customcard(_class[1], images[1], des[1]),
          customcard(_class[2], images[2], des[2]),
          customcard(_class[3], images[3], des[3]),
          customcard(_class[4], images[4], des[4]),
        ],
      ),
    );
  }

}