import 'react-native'; 
import React from 'react'; 
import renderer from 'react-test-renderer';
import WordGroupScreen from '../WordGroup'; 
import firebase from 'firebase'; 
import firebaseConfig from '../../../constants/firebaseConfig'; 
//route.params.nameTopic;
const route1 = { params: { nameTopic: 'test' } }
const navigation1 = {}

it('rerender WordGroupScreen correctly', () => {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  renderer.create(
    <WordGroupScreen 
      route={route1}
      navigation={navigation1}
    />
  )
})