import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_detail.dart';

class Word {
  String title;
  String subTitle;

  Word({ this.title, this.subTitle });
}

class WordPage extends StatefulWidget {
  @override
  _WordPageState createState() => _WordPageState();
}

class _WordPageState extends State<WordPage> {

  List<Word> words = [
    Word(title: 'Bảng động từ bất quy tắc', subTitle: 'Tổng hợp các động từ bất quy tắc sử dụng trong tiếng Anh'),
    Word(title: 'Danh từ', subTitle: 'Các loại danh từ, danh từ đếm được, danh từ không đếm được, danh từ số ít, danh từ số nhiều'),
    Word(title: 'Động từ', subTitle: 'Động từ khuyết thiếu, mội động từ và ngoại động từ'),
    Word(title: 'Tính từ', subTitle: 'Vị trí tính từ, tính từ đuôi "ed" và đuôi "ing", tính từ ghép'),
    Word(title: 'Trạng từ', subTitle: 'Vị trí trạng từ, các loại trạng từ, phân loại trạng từ và các...'),
    Word(title: 'Giới từ', subTitle: 'Định nghĩa, cách dùng và các loại giới từ trong tiếng Anh'),
    Word(title: 'Quy tắc trọng âm', subTitle: 'Tổng hợp hơn 10 cách nhận diện trọng amm trong tiếng Anh'),
    Word(title: 'Cách phát âm "s/es"', subTitle: 'Tổng hợp các cách phát âm "s/es" trong tiếng Anh'),
    Word(title: 'Cách phát âm "ed"', subTitle: 'Tổng hợp các cách phát âm "ed" trong tiếng Anh'),
    Word(title: 'Vị trí của Tính từ - Danh từ - Động từ - Trạng từ', subTitle: 'Xác định vị trí của tính từ, danh từ, động từ, trạng từ trong tiếng Anh'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
        child: ListView.builder(
          itemCount: words.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                leading: Text('${index + 1}'),
                title: Text(words[index].title),
                subtitle: Text(
                  words[index].subTitle,
                  overflow: TextOverflow.ellipsis,
                ),
                trailing: Icon(Icons.arrow_forward_ios),
                onTap: () {
                  Navigator.push(
                    context,
                    new MaterialPageRoute(
                      builder: (context) => GrammarDetail(),
                      settings: RouteSettings(
                        arguments: {
                          'title': words[index].title,
                          'subTitle': words[index].subTitle
                        }
                      )
                    ),
                  );
                },
              ),
            );
          }
        ),
      ),
    );
  }
}
