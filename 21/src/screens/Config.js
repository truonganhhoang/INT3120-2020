import * as firebase from 'firebase'; 

var firebaseConfig = {
  apiKey: "AIzaSyAT78mv3DAJ02OLzz0mw-R6r3mU178rL2I",
  authDomain: "vancauhoivisao-cc11d.firebaseapp.com",
  databaseURL: "https://vancauhoivisao-cc11d.firebaseio.com",
  projectId: "vancauhoivisao-cc11d",
  storageBucket: "vancauhoivisao-cc11d.appspot.com",
  messagingSenderId: "143914113503",
  appId: "app-id",
  measurementId: "G-measurement-id",
};
export const baseApp = firebase.initializeApp(firebaseConfig);

