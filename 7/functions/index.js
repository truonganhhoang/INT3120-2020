const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const firebase = require("firebase");
const categoryList = require("../6000VocabEnglish/data/CategoryName");
const settingList = require("../6000VocabEnglish/data/SettingName");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Config for Firestore
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

admin.initializeApp(functions.config(firebaseConfig).firebase);

let db = admin.firestore();

// Create function here...
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(admin.apps);
  response.send("Hello from Firebase!");
});

// get all topic to display in home screen
exports.getAllTopic = functions.https.onRequest((request, response) => {
  response.send(categoryList);
});

exports.getFileAudio = functions.https.onRequest((req, res) => {
  

})