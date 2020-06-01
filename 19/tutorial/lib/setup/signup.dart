import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:tutorial/setup/login.dart';

class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => new _SignUpPageState();
      
    
  }
  
  class _SignUpPageState extends State<SignUpPage> {

  String _email, _password;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue[100],
      appBar: AppBar(
        backgroundColor: Colors.blue[400],
        title: Text('Sign Up'),
      ),
      body : Container(
      padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 50.0),
      child: Form(
        key: _formKey,
        child: Column(
          children: <Widget>[
            SizedBox(height: 10.0,),
            TextFormField(
                decoration: InputDecoration(
                hintText: 'password',
                fillColor: Colors.grey,
                filled: true,
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color : Colors.white, width: 2.0),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.pink ,width: 2.0),
                ),
              ),
              validator: (input) => input.isEmpty ? 'Enter valid email' : null,
              onChanged: (input){
                setState(() => _email = input);
              },
            ),
            SizedBox(height: 10.0),
            TextFormField(
                decoration: InputDecoration(
                hintText: 'password',
                fillColor: Colors.white,
                filled: true,
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color : Colors.white, width: 2.0),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.pink ,width: 2.0),
                ),
              ),
              obscureText: true,
              validator: (input) => input.length < 6 ? 'Password must have at least 6 character' : null,
              onChanged: (input){
                setState(() => _password = input);
              },

            ),
            RaisedButton(
              onPressed:  signUp,
              
              child: Text('Sign Up'),
            )
            
          ],)
      ),
      ),
    );
  }

  Future<void> signUp() async {
    final formState = _formKey.currentState;
    if(formState.validate()){
      formState.save();
      try{
        FirebaseUser user = (await FirebaseAuth.instance.createUserWithEmailAndPassword(email: _email.trim(), password: _password.trim())).user;
        user.sendEmailVerification();
        Navigator.of(context).pop();
        Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => LoginPage()));
      } catch (e){
        print(e.message);
      }
      
    }
  }
}