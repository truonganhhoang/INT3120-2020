import data from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyCbQxG13HXpbBbvzjprMM5fmTL9snVfkls",
    authDomain: "englishgrammar-6ce40.firebaseapp.com",
    databaseURL: "https://englishgrammar-6ce40.firebaseio.com",
    projectId: "englishgrammar-6ce40",
    storageBucket: "englishgrammar-6ce40.appspot.com",
    messagingSenderId: "768282820945",
    appId: "1:768282820945:web:8076f06918ff6fe72bd370",
    measurementId: "G-4HMTC3XZVH"
  };
data.initializeApp(firebaseConfig);
export const rootData = data.database().ref('dataSentences');