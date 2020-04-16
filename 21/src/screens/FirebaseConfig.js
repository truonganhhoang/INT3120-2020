import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyA_Gg7N1wGTQ0o9Z5mqdLCvVCf1BrJL06g",
    authDomain: "vancauhoivisao-119c7.firebaseapp.com",
    databaseURL: "https://vancauhoivisao-119c7.firebaseio.com",
    projectId: "vancauhoivisao-119c7",
    storageBucket: "vancauhoivisao-119c7.appspot.com",
    messagingSenderId: "863693842001",
    appId: "1:863693842001:web:e1c308d93d30da86303a70",
    measurementId: "G-H7RHB8CNLS"
  };
  // Initialize Firebase

export const baseApp =  firebase.initializeApp(firebaseConfig);