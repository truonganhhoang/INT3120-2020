import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'sidemenu.dart';
import 'quiz.dart';

class QuizGame extends StatefulWidget{
  QuizGame({Key key}) : super(key: key);
  @override
  State<StatefulWidget> createState() {
    return new QuizGameState();
      }
    }
   
class QuizGameState extends State<QuizGame>{
  List _class =
  ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

  List<DropdownMenuItem<String>> _dropDownMenuItems;
  String _currentClass;

  @override
  void initState() {
    _dropDownMenuItems = getDropDownMenuItems();
    _currentClass = _dropDownMenuItems[0].value;
    super.initState();
  }

  List<DropdownMenuItem<String>> getDropDownMenuItems() {
    List<DropdownMenuItem<String>> items = new List();
    for (String whatclass in _class) {
      items.add(new DropdownMenuItem(
          value: whatclass,
          child: new Text(whatclass)
      ));
    }
    return items;
  }

  @override
  Widget build(BuildContext context) {
 
    return Scaffold(
      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text('App luyện tập toán tiểu học'),
        backgroundColor: Colors.greenAccent,
        
      ),
    
      body: new Stack(
        children: <Widget>[
        new Container(
        
        decoration: new BoxDecoration(
          image: new DecorationImage(image: new AssetImage("images/background.jpg"), fit: BoxFit.cover,),
          ),
        child: Padding(
          padding: const EdgeInsets.all(100.0),
          child: Column(
            
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              new DropdownButton(
                
                value: _currentClass, 
                items: _dropDownMenuItems,
                onChanged: changedDropDownItem,
               
              ),
              new Container(
                padding: new EdgeInsets.all(16.0),
                
              ),
              new MaterialButton(
                height : 50.0,
                
                color: Colors.redAccent,
                child : Text('Bắt đầu',
                  style: TextStyle(
                    fontSize: 19.0,
                    color: Colors.white,
                  )
                ),
                onPressed: (){
                  Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) => GetData(_currentClass),));
                
                }
                

              )

            ],
          ),
        )
        ),
      ], 
      ),


    );  

  }


    void changedDropDownItem(String selectedClass) {
    setState(() {
      _currentClass = selectedClass;
    });
  }
  //method to start quiz

}
