import 'react-native'; 
import React from 'react'; 
import renderer from 'react-test-renderer'; 
import StartScreen from '../Start'; 
import firebaseConfig from '../../../constants/firebaseConfig'; 
import firebase from 'firebase';
const navigation1 = {}

it ('rerender StartScreen correctly', () => {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  renderer.create(
    <StartScreen 
      navigation={navigation1}
    />
  )
})