import 'package:flutter/material.dart';
import 'package:englishlearningapplication/screens/grammar/grammar_detail.dart';

class Sentence {
  String title;
  String subTitle;

  Sentence({ this.title, this.subTitle });
}

class SentencePage extends StatefulWidget {
  @override
  _SentencePageState createState() => _SentencePageState();
}

class _SentencePageState extends State<SentencePage> {

  List<Sentence> sentences = [
    Sentence(title: 'Các thì trong tiếng Anh', subTitle: 'Hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn'),
    Sentence(title: 'Câu bị động', subTitle: 'Cấu trúc ngữ pháp, các trường hợp đặc biêt'),
    Sentence(title: 'Câu ước', subTitle: 'Câu ước với Wish loại 1, loại 2, loại 3'),
    Sentence(title: 'Câu gián tiếp', subTitle: 'Câu trực tiếp, câu gián tiếp và cách chuyển từ câu trực tiếp sang câu gián tiếp'),
    Sentence(title: 'Câu điều kiện', subTitle: 'Câu điều kiện loại 1, loại 2, loại 3'),
    Sentence(title: 'Câu so sánh', subTitle: 'So sánh bằng, so sánh hơn, so sánh hơn nhất, so sánh không ngang bằng'),
    Sentence(title: 'Mệnh đề quan hệ', subTitle: 'Đại từ quan hệ, trạng từ quan hệ, rút gọn mệnh đề và lược bỏ mệnh '),
    Sentence(title: 'Câu cảm thán', subTitle: 'Cảm thán với What, So, How, Such'),
    Sentence(title: 'Câu hỏi đuôi', subTitle: 'Công thức và các dạng đặc biệt của câu hỏi đuôi'),
    Sentence(title: 'Câu đảo ngữ', subTitle: 'Đảo ngữ với Not, No, Never, Little, Only, No sooner...than..., Not only...but also...'),
    Sentence(title: 'Câu mệnh lệnh', subTitle: 'Câu mệnh lệnh trực tiếp, gián tiếp, dạng phủ định của câu'),
    Sentence(title: 'Câu nhấn mạnh (câu chẻ)', subTitle: 'Câu nhấn mạnh chủ ngữ, tân ngữ, trạng ngữ'),
    Sentence(title: 'Công thức viết lại câu', subTitle: 'Tổng hợp tất cả các công thức viết lại câu trong tiếng Anh'),
    Sentence(title: 'Thành ngữ tục ngữ', subTitle: 'Các thành ngữ, tục ngữ và ca dao thông dụng'),
    Sentence(title: 'Câu đồng tình', subTitle: 'Câu đồng tình với too, so, either, neither'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 6, 0, 0),
        child: ListView.builder(
          itemCount: sentences.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                leading: Text('${index + 1}'),
                title: Text(sentences[index].title),
                subtitle: Text(
                  sentences[index].subTitle,
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
                          'title': sentences[index].title,
                          'subTitle': sentences[index].subTitle
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
