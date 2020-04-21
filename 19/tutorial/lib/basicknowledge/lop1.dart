import 'package:flutter/material.dart';
import 'package:tutorial/sidemenu.dart';

class ClassOne extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    
    return new ClassOneState();
  }
}

class ClassOneState extends State<ClassOne>{
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text("Lớp 1"),
      ),
      
    );
  }
}