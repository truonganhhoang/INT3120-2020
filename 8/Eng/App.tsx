/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';

import { MyApp } from './src/android/navigation'; 
import firebase from 'firebase'; 

var firebaseConfig = { 
  apiKey: "AIzaSyCIPo4i1f8qzNtVLEVVPh34ubCs6pv3UUs",
  authDomain: "english-uet-team.firebaseapp.com",
  databaseURL: "https://english-uet-team.firebaseio.com",
  projectId: "english-uet-team",
  storageBucket: "english-uet-team.appspot.com",
  messagingSenderId: "151102314176",
  appId: "1:151102314176:web:866bcec21e8f77a205bf25",
  measurementId: "G-G550WJ0Q0E"
};

const App = () => {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  return (
    <MyApp />
  )
};


export default App;
