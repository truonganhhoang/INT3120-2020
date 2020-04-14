import 'package:flutter/material.dart';

class QuestionQuiz{
  var questions = [
    "Ngạn có 6 quả táo, Hà Lan cho ngạn 4 quả táo. Hỏi Ngạn có bao nhiêu quả",
    "Tèo mua 10 quả dưa gang giúp mẹ, trên đường đi Tèo làm rơi 2 quả. Hỏi Tèo còn bao nhiêu quả dưa gang. ",
    "Từ nhà Hùng đến trường mất 10 cây số. Hỏi cả đi cả về hùng đi bao nhiêu cây số"
  ];
  var choices = [
    ["1","5","7","10"],
    ["4","2","12","8"],
    ["2","43","15","20"]
  ];

  var answers = [
    "10", "8","20"
  ];
}

var finalScore = 0; //Tổng điểm
var questionNumber = 0; //Chạy câu hỏi
var quiz = new QuestionQuiz();

class Quiz extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new QuizState();
      }
    
  }
    
class QuizState extends State<Quiz> {
  TextEditingController _controller = new TextEditingController();
  @override
  Widget build(BuildContext context) {
        return WillPopScope(
          child: Scaffold(
            
            body: new Container(
              
    
              margin: const EdgeInsets.all(20.0),
              alignment: Alignment.topCenter,
              child: Column(
                children: <Widget>[
    
                  Padding(padding: EdgeInsets.all(20.0)),
                  
                  // Container show đề bài
                  new Container(
                    alignment: Alignment.centerRight,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
    
                        //Câu số ...
                        new Text("Câu ${questionNumber +1}",
                          style: TextStyle(fontSize: 20.0),
                        ),
    
                        // Điểm 
                        new Text("Điểm : $finalScore",
                          style: TextStyle(fontSize: 20.0),
                        ),
                      ],
                    )
                  ),
    
                  //Show quiz
                  new Padding(padding: EdgeInsets.all(20.0)),
                  new Text(quiz.questions[questionNumber],
                      style: TextStyle(fontSize:20.0),
                      ),
    

                  // Text Answer
                    new Container(
                  
                      margin: const EdgeInsets.only(left: 150.0, right: 150.0,top: 15.0),
                      
                      child: new TextFormField(
                        textAlign: TextAlign.center,
                        controller: _controller,
                        decoration: InputDecoration(
                          hintText: "Số",
                        ),
                        keyboardType: TextInputType.number,
                        style: TextStyle(fontSize: 22.0),
                        onEditingComplete: (){
                          if (_controller.text == quiz.answers[questionNumber]){
                            debugPrint("Câu trả lời chính xác");
                            finalScore++;
                          }
                          else{
                            debugPrint("Câu trả lời chưa chính xác");
                          }
                          _controller.clear();
                          updateQuestion();
                        },
                      ),
                    ),
              

              // Exit Button    
              new Padding(padding: EdgeInsets.all(30.0)),
                new Container(
                  alignment: Alignment.bottomCenter,
                  child:  new MaterialButton(
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(80.0)),
                      minWidth: 80.0,
                      height: 30.0,
                      color: Colors.blueAccent,
                      onPressed: (){
                        if (_controller.text == quiz.answers[questionNumber]){
                            debugPrint("Câu trả lời chính xác");
                            finalScore++;
                          }
                          else{
                            debugPrint("Câu trả lời chưa chính xác");
                          }
                          _controller.clear();
                          updateQuestion();
                      },
                      child: new Text("OK",
                        style: new TextStyle(
                            fontSize: 18.0,
                            color: Colors.white
                        ),)
                  )
                ),
                
                new Container(
                  alignment: Alignment.bottomCenter,
                  child:  new MaterialButton(                      
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(80.0)),
                    minWidth: 180.0,
                    height: 30.0,
                    color: Colors.red,
                    onPressed: resetQuiz,
                    child: new Text("Thoát",
                      style: new TextStyle(
                          fontSize: 18.0,
                          color: Colors.white
                      ),
                    )
                  )
                ),

            ],
          ),

        ),

      ),

      onWillPop: ()async => false,
      );
    
  }

  void resetQuiz(){
      setState(() {
      Navigator.pop(context);
      finalScore = 0;
      questionNumber = 0;
    });
  }

  void updateQuestion(){
    setState(() {
      if (questionNumber == quiz.questions.length -1){
        Navigator.push(context, new MaterialPageRoute(builder: (context) => new Summary(score : finalScore)));
      }
      else{
        questionNumber++;
      }
    });
  }
}

class Summary extends StatelessWidget{
  final int score;
  Summary({Key key, @required this.score}) : super(key : key);
  @override
  Widget build(BuildContext context) {
    return new WillPopScope(
      child: Scaffold(
        
        body: new Container(
          margin: const EdgeInsets.all(10.0),
          alignment: Alignment.center,
          child: new Column(
            children: <Widget>[
              new Padding(padding: EdgeInsets.all(10.0)),
              new Text("Điểm tổng :  $score",
                style: new TextStyle(
                  fontSize :25.0,
                  ),
                ),
              
              new Padding(padding: EdgeInsets.all(10.0)),

              new MaterialButton(
                color: Colors.redAccent,
                onPressed: (){
                  questionNumber = 0;
                  finalScore = 0;
                  Navigator.pop(context);
                },
                child: new Text("Làm lại"),
              )
            ],
          )
        ),
      ), 
      onWillPop: ()async => false
    );
  }

}