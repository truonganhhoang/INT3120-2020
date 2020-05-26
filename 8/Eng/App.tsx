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
import firebaseConfig from './src/android/constants/firebaseConfig'; 
import { getDataFromStorage, storeDataToStorage } from './src/android/services'; 
// import { AsyncStorage, View, Text } from 'react-native'; 

const App = () => {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }

  const check = async () => {
    let lessons = await getDataFromStorage('favoriteLessons'); 
    if (lessons == null) {
      storeDataToStorage('favoriteLessons', JSON.stringify({}))
    }
    let words = await getDataFromStorage('favoriteWords'); 
    if (words == null) {
      storeDataToStorage('favoriteWords', JSON.stringify({}))
    }
  }
  check(); 
  return (
    <MyApp />
  )
};


export default App;