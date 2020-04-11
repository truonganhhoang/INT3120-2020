import firebase from 'firebase'
import { Component } from 'react';
// TODO: Replace the following with your app's Firebase project configuration
var Config = {
  apiKey: "AIzaSyDrOcOVkvItKxIirPzOhyoa_OP2uIWtx6Q",
  authDomain: "apptest-29.firebaseapp.com",
  databaseURL: "https://apptest-29.firebaseio.com",
  projectId: "apptest-29",
  storageBucket: "apptest-29.appspot.com",
  messagingSenderId: "956335494553",
  appId: "1:956335494553:web:265042972f53577938ef08"
};
// Initialize Firebase
const AppConfig = firebase.initializeApp(Config);
const rootRef = AppConfig.database().ref('sign');
const arrBan = rootRef.child('ban');
const arrCommand = rootRef.child('command');
const arrDanger = rootRef.child('danger');
const arrInstruction = rootRef.child('instruction');
export {rootRef, arrBan, arrCommand, arrDanger, arrInstruction}



