import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnwdWYPthU4YIXFGlZQWsKfd-9GJc4iu8',
  authDomain: 'timetable-accb8.firebaseapp.com',
  databaseURL: 'https://timetable-accb8.firebaseio.com',
  projectId: 'timetable-accb8',
  storageBucket: 'timetable-accb8.appspot.com',
  messagingSenderId: '743742570946',
  appId: '1:743742570946:web:9d7b6cba89dfada3d2165b',
  measurementId: 'G-FXWNCCBX3B',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
