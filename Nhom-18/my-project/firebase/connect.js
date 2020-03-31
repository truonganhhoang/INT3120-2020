import * as firebase from 'firebase'
import 'firebase/storage'
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyALXREZChYK0u17aSJV4zaJHr8o02fWJgg",
    authDomain: "dataapp-88018.firebaseapp.com",
    databaseURL: "https://dataapp-88018.firebaseio.com",
    projectId: "dataapp-88018",
    storageBucket: "dataapp-88018.appspot.com",
    messagingSenderId: "913638126127",
    appId: "1:913638126127:web:204376638b57d69c110cda",
    measurementId: "G-8HYPLPWGGQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export {
    storage, firebase as deflault
  }

  