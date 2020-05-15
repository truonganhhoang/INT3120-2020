import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import * as firebase from 'firebase';

import firebasea from '../config/firebase';
import data from './data';

const db = firebase.firestore();


function Adddata() {
  useEffect(() => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().useDeviceLanguage();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      display: 'popup'
    });
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const token = result.credential.accessToken;
      // console.log(result);
      // The signed-in user info.
      // const { user } = result;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      // const { credential } = error;
      // ...
    });
  }, []);

  const click = () => {
  };
  return (
    <View style={styles.container}>
      <View>
        <Button title="hello fb" onPress={click} />
      </View>
      <Text onPress={() => {
        console.error('Error writing document: ');
        db.collection('kanjiProject').doc('data').set(data)
          .then(() => {
            console.log('Document successfully written!');
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      }}
      >
        AZPirn8BCDOQBHQZknqmKlZQ
      </Text>
    </View>

  );
}

export default Adddata;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});
