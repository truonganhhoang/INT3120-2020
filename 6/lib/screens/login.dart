import 'package:CWCFlutter/api/word_api.dart';
import 'package:CWCFlutter/dialog/msg_dilog.dart';
import 'package:CWCFlutter/model/user.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/screens/reset.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

enum AuthMode { Signup, Login }

class Login extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _LoginState();
  }
}

class _LoginState extends State<Login> {
  bool _showPassword = false;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _passwordController = new TextEditingController();
  AuthMode _authMode = AuthMode.Login;

  User _user = User();

  @override
  void initState() {
    AuthNotifier authNotifier =
        Provider.of<AuthNotifier>(context, listen: false);
    initializeCurrentUser(authNotifier);
    super.initState();
  }

  @override
  void dispose() {
    _passwordController.dispose();
    super.dispose();
  }

  void _submitForm() {
    if (!_formKey.currentState.validate()) {
      return;
    }

    _formKey.currentState.save();

    AuthNotifier authNotifier =
        Provider.of<AuthNotifier>(context, listen: false);

    if (_authMode == AuthMode.Login) {
//      LoadingDialog.showLoadingDialog(context, "Loading...");
      login(_user, authNotifier, () {
//        LoadingDialog.hideLoadingDialog(context);
//        Navigator.of(context)
//            .push(MaterialPageRoute(builder: (context) => Feed()));
      }, (msg) {
//        LoadingDialog.hideLoadingDialog(context);
        MsgDialog.showMsgDialog(context, "Sign-In", msg);
      });
    } else {
      signup(_user, authNotifier);
    }
  }

  Widget _buildDisplayNameField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Display Name",
        labelStyle: TextStyle(color: Colors.white54),
      ),
      keyboardType: TextInputType.text,
      style: TextStyle(fontSize: 26, color: Colors.white),
      cursorColor: Colors.white,
      validator: (String value) {
        if (value.isEmpty) {
          return 'Display Name is required';
        }

        if (value.length < 5 || value.length > 12) {
          return 'Display Name must be betweem 5 and 12 characters';
        }
        return null;
      },
      onSaved: (String value) {
        _user.displayName = value;
      },
    );
  }

  Widget _buildEmailField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Email",
        labelStyle: TextStyle(color: Colors.white54),
      ),
      keyboardType: TextInputType.emailAddress,
      style: TextStyle(fontSize: 26, color: Colors.white),
      cursorColor: Colors.white,
      validator: (String value) {
        if (value.isEmpty) {
          return 'Email is required';
        }

        if (!RegExp(
                r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            .hasMatch(value)) {
          return 'Please enter a valid email address';
        }

        return null;
      },
      onSaved: (String value) {
        _user.email = value;
      },
    );
  }

  Widget _buildPasswordField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Password",
        suffixIcon: GestureDetector(
          onTap: () {
            setState(() {
              _showPassword = !_showPassword;
            });
          },
          child: Icon(
            _showPassword ? Icons.visibility : Icons.visibility_off,
          ),
        ),
        labelStyle: TextStyle(color: Colors.white54),
      ),
      style: TextStyle(fontSize: 26, color: Colors.white),
      cursorColor: Colors.white,
      obscureText: !_showPassword,
      controller: _passwordController,
      validator: (String value) {
        if (value.isEmpty) {
          return 'Password is required';
        }

        if (value.length < 5 || value.length > 20) {
          return 'Password must be betweem 5 and 20 characters';
        }

        return null;
      },
      onSaved: (String value) {
        _user.password = value;
      },
    );
  }

  Widget _buildConfirmPasswordField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Confirm Password",
        labelStyle: TextStyle(color: Colors.white54),
      ),
      style: TextStyle(fontSize: 26, color: Colors.white),
      cursorColor: Colors.white,
      obscureText: true,
      validator: (String value) {
        if (_passwordController.text != value) {
          return 'Passwords do not match';
        }

        return null;
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    print("Building login screen");

    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(
          height: MediaQuery.of(context).size.height,
        ),
        decoration: BoxDecoration(color: Color(0xff34056D)),
        child: Form(
          autovalidate: true,
          key: _formKey,
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.fromLTRB(32, 96, 32, 0),
              child: Column(
                children: <Widget>[
                  Text(
                    "English App",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 36, color: Colors.white),
                  ),
                  SizedBox(height: 32),
                  _authMode == AuthMode.Signup
                      ? _buildDisplayNameField()
                      : Container(),
                  _buildEmailField(),
                  _buildPasswordField(),
                  GestureDetector(
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(0.0, 0.0, 230.0, 0.0),
                        child: Text(
                          _authMode == AuthMode.Login ? 'Forget Password' : '',
//                        textAlign: TextAlign.left,
                          style: TextStyle(fontSize: 15, color: Colors.white),
                        ),
                      ),onTap: (){
                    Navigator.push(context, MaterialPageRoute(builder: (context)=>new Reset()));
                  }
                  ),
                  _authMode == AuthMode.Signup
                      ? _buildConfirmPasswordField()
                      : Container(),
                  SizedBox(height: 32),
//                  GestureDetector(
//                    child: Text(
//                      _authMode == AuthMode.Login ? 'Forget Password' : '',
//                      textAlign: TextAlign.left,
//                      style: TextStyle(fontSize: 15, color: Colors.white),
//                    ),onTap: (){
//                    Navigator.push(context, MaterialPageRoute(builder: (context)=>new Reset()));
//                  }
//                  ),
                  ButtonTheme(
                    minWidth: 200,
                    child: RaisedButton(
                      padding: EdgeInsets.all(10.0),
                      child: Text(
                        'Switch to ${_authMode == AuthMode.Login ? 'Signup' : 'Login'}',
                        style: TextStyle(fontSize: 20, color: Colors.white),
                      ),
                      onPressed: () {
                        setState(() {
                          _authMode = _authMode == AuthMode.Login
                              ? AuthMode.Signup
                              : AuthMode.Login;
                        });
                      },
                    ),
                  ),
                  SizedBox(height: 16),
                  ButtonTheme(
                    minWidth: 200,
                    child: RaisedButton(
                      padding: EdgeInsets.all(10.0),
                      onPressed: () => _submitForm(),
                      child: Text(
                        _authMode == AuthMode.Login ? 'Login' : 'Signup',
                        style: TextStyle(fontSize: 20, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
