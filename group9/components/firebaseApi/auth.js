import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from './firebaseInit';
import * as Facebook from 'expo-facebook';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.firebase = firebase;
  }
  checkIfLoggedIn = () => {
    var loggedIn = undefined;
    this.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        userAsyncStorage(user, 'login');
        this.loggedIn = true;
      } else {
        userAsyncStorage(user, 'logout');
        this.loggedIn = false;
      }
    });
    return loggedIn;
  };

  userAsyncStorage = async (curUser, status) => {
    if (status === 'login') {
      await AsyncStorage.setItem('curUser', JSON.stringify({ curUser }));
    } else if (status === 'logout') {
      await AsyncStorage.deleteItem('curUser');
    }
  };

  signInWithFacebook = async () => {
    await Facebook.initializeAsync('299759954328219');
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = this.firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      curUser = this.firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          // Handle Errors here.
        });
      userAsyncStorage(curUser);
    }
  };

  signInAnonymously = async () => {
    curUser = this.firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
      });
    userAsyncStorage(curUser);
  };
}

export default Auth;
