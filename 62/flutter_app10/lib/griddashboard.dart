import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class GridDashboard extends StatelessWidget {
  Items item1 = new Items(
      title: "Học lý thuyết",
      img: "assets/images/book.png");

  Items item2 = new Items(
    title: "Thi sát hạch",
    img: "assets/images/computer2.png",
  );
  Items item3 = new Items(
    title: "Biển báo đường bộ",
    img: "images/bien.png",
  );
  Items item4 = new Items(
    title: "Mẹo thi đạt kết quả cao",
    img: "assets/images/bongden.png",
  );
  Items item5 = new Items(
    title: "Tra cứu luật nhanh",
    img: "assets/todo.png",
  );
  Items item6 = new Items(
    title: "Các câu hay sai",
    img: "assets/images/suynghi.png",
  );

  @override
  Widget build(BuildContext context) {
    List<Items> myList = [item1, item2, item3, item4, item5, item6];
    var color = 0xff453658;
    return Flexible(
      child: GridView.count(
          childAspectRatio: 1.0,
          padding: EdgeInsets.only(left: 16, right: 16, top: 80),
          crossAxisCount: 2,
          crossAxisSpacing: 20,
          mainAxisSpacing: 20,
          children: myList.map((data) {
            return Container(
              decoration: BoxDecoration(
                  color: Colors.white, borderRadius: BorderRadius.circular(10)),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Image.asset(
                    data.img,
                    width: 70,
                  ),
                  SizedBox(
                    height: 14,
                  ),
                  Text(
                    data.title,
                    textAlign: TextAlign.center,
                    style: GoogleFonts.openSans(
                        textStyle: TextStyle(
                            color: Colors.black,
                            fontSize: 18,
                            fontWeight: FontWeight.w600)),
                  ),
                  SizedBox(
                    height: 8,
                  ),

                  SizedBox(
                    height: 14,
                  ),
                ],
              ),
            );
          }).toList()),
    );
  }
}

class Items {
  String title;
  String img;
  Items({this.title, this.img});
}
