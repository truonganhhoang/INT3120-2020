import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// Firebase App (the core Firebase SDK) is always required and must be listed first
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7wpY__5nvuuw3by4DxxXzO3o9dooSvbY",
  authDomain: "fakeedumall.firebaseapp.com",
  databaseURL: "https://fakeedumall.firebaseio.com",
  projectId: "fakeedumall",
  storageBucket: "fakeedumall.appspot.com",
  messagingSenderId: "41535986986",
  appId: "1:41535986986:web:e061e4c985ceb5dd6d1253",
  measurementId: "G-MVNWV0LN01"
  };
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
