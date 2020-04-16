import 'package:flutter/material.dart';
import 'quiz.dart';
import 'result.dart';

void main() => runApp(QuizApp());

class QuizApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState()=> _QuizAppState();
}

class _QuizAppState extends State<QuizApp> {
  final _questions = const [
    {
      'QusTxt': 'Khái niệm đường bộ được hiểu như thế nào là đúng',
      'Answers': [
        {'AnsTxt':'Đường bộ, cầu đường bộ', 'Score':5},
        {'AnsTxt':'Hầm đường bộ, bến phà đường bộ', 'Score':20},
        {'AnsTxt':'Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phun trợ khác', 'Score':0},

      ],
    },
    {
      'QusTxt': 'Vạch kẻ đường là gì',
      'Answers': [
        {'AnsTxt':'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vi trí dừng lại', 'Score':5},
        {'AnsTxt':'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ xe trên đường', 'Score':0},
        {'AnsTxt':'Tất cả các ý nêu trên :)', 'Score':0},

      ],
    },
    {
      'QusTxt': 'Khái niệm phần đường xe chạy được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm làn đường được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm đường phố được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm dải phân cách được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Dải phân cách trên đường bộ được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm đường ưu tiên được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm phương tiện giao thông đường bộ được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm phương tiện giao thông cơ giới đường bộ được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm phương tiện giao thông cơ giới đường bộ gồm những loại nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm phần đường xe chạy gồm những loại nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Người tham gia giao thông đường bộ gồm những đối tượng nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Người điều khiển giao thông được hiểu thế nào là đúng',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},

        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Hành vi nào sau đây bị nghiêm cấm',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Những hành vi nào sau đây bị nghiêm cấm',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm phần đường xe chạy được hiểu như thế nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm đường phố được hiểu thế nào là đúng',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Khái niệm dải phân cách được hiểu thế nào là đúng',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },
    {
      'QusTxt': 'Dải phân cách trên đường bộ gồm những loại nào',
      'Answers': [
        {'AnsTxt':'Rabbet', 'Score':0},
        {'AnsTxt':'Monkey :)', 'Score':5},
        {'AnsTxt':'Dog', 'Score':0},
        {'AnsTxt':'Cat', 'Score':0},
      ],
    },

  ];

  var _questionIndex = 0;
  var _totalScore =0;

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }
  void _answerQuestion(int score) {
    _totalScore += score;
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Thi sát hạch'),
        ),
        body: _questionIndex < _questions.length
            ? Quiz(
            answerQuestion: _answerQuestion,
            questionIndex: _questionIndex,
            questions: _questions)
            : Result(_totalScore, _resetQuiz),
      ),
    );
  }
}