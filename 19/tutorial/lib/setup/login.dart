import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:tutorial/main.dart';
import 'package:tutorial/setup/signup.dart';
import 'package:tutorial/setup/loading.dart';


class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => new _LoginPageState();
      
    
  }
  
  class _LoginPageState extends State<LoginPage> {

  //final AuthService _auth = AuthService();
  String _email, _password;
  String error = '';
  bool loading = false;

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();


  @override
  Widget build(BuildContext context) {
    return loading ? Loading() : Scaffold(
      backgroundColor: Colors.blue[100],
      
      appBar: AppBar(
        backgroundColor: Colors.blue[400],
        title: Text('Sign in'),
      ),
      body : Container(
      
      padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 50.0),
      child: Form(
        key: _formKey,
        child: Column(
          children: <Widget>[
            
            TextFormField(
              decoration: InputDecoration(
                hintText: 'Email',
                fillColor: Colors.white,
                filled: true,
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color : Colors.white, width: 2.0),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.pink ,width: 2.0),
                ),
              ),
              validator: (input) => input.isEmpty ? 'Enter email' : null,
              onChanged: (input){
                setState(() => _email = input);
              },
            ),
            SizedBox(height: 10.0),
            TextFormField(
              decoration: InputDecoration(
                hintText: 'Password',
                fillColor: Colors.white,
                filled: true,
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color : Colors.white, width: 2.0),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.pink ,width: 2.0),
                ),
              ),
              validator: (input) => input.length < 6 ? 'Password must have at least 6 character' : null,
              obscureText: true,
              onChanged: (input){
                setState(() => _password = input);
              },

            ),
            new Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
              
              RaisedButton(
              onPressed:  signIn,  
              child: Text('Sign in'),
            ),
             RaisedButton(
              onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context) => SignUpPage()));
              },
              child: Text('Sign up'),
            ),
            ],
            ), 
            SizedBox(height:12.0),
            Text(
              error,
              style: TextStyle(color: Colors.red, fontSize:14.0),
            )  
          ],
          ),
      ),
      ),
    );

  }

  Future<void> signIn() async {
    final formState = _formKey.currentState;
    if(formState.validate()){
      setState(() => loading = true);  
      formState.save();
      try{
        FirebaseUser user = (await FirebaseAuth.instance.signInWithEmailAndPassword(email: _email, password: _password)).user;
        Navigator.push(context, MaterialPageRoute(builder: (context) => MyHomePage(user : user)));
      } catch (e){
        setState(() => error = 'Cant log in bru!' );
        loading = false;
      }
      
    }
  }
}