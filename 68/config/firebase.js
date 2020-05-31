import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAWqfBM0-NN6BYJgEEF5HQt4Jj0qDBjDcU',
  authDomain: 'perfect-tape-242508.firebaseapp.com',
  databaseURL: 'https://perfect-tape-242508.firebaseio.com',
  projectId: 'perfect-tape-242508',
  storageBucket: 'perfect-tape-242508.appspot.com',
  messagingSenderId: '376767086525',
  appId: '1:376767086525:web:574123bbfcec8029bc1cd4',
  measurementId: 'G-S2NYKMVWE5'
};

export default firebase.initializeApp(firebaseConfig);
