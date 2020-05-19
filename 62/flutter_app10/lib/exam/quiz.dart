import 'package:flutter/material.dart';
import 'package:flutterapp10/exam/Question.dart';
import 'package:flutterapp10/exam/answer.dart';

class Quiz extends StatelessWidget {
  final List<Map<String, Object>> questions;
  final int questionIndex;
  final Function answerQuestion;
  Quiz(
      {
        @required this.questions,
        @required this.answerQuestion,
        @required this.questionIndex
      }
      );

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Question(
          questions[questionIndex]['QusTxt'],
        ),
        ...(questions[questionIndex]['Answers'] as List<Map<String, Object>>).map((answer) {
          return Answer(()=>answerQuestion(answer['Score']), answer['AnsTxt']);
        }).toList()
      ],
    );
  }
}