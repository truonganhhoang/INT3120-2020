import firebase from "firebase";
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyApB78js0z4d4_1btqLI5IgjgWLL0k7T8o",
  authDomain: "learningvocabenglish-mobileapp.firebaseapp.com",
  databaseURL: "https://learningvocabenglish-mobileapp.firebaseio.com",
  projectId: "learningvocabenglish-mobileapp",
  storageBucket: "learningvocabenglish-mobileapp.appspot.com",
  messagingSenderId: "940462189090",
  appId: "1:940462189090:web:92fa99a4997bd2b989f87b",
  measurementId: "G-TC7TG9GWDL"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const storage = firebase.storage();

module.exports = storage;
