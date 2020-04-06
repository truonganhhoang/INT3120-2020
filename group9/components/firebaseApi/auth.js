import * as Facebook from 'expo-facebook';
import firebase from './firebaseInit';

const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync('299759954328219');
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = this.firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential);
    } else {
      console.log(type);
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const signInAnonymously = async () => {
  try {
    await firebase.auth().signInAnonymously();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const signOut = async () => {
  await firebase.auth().signOut();
};

const signUpWithEmail = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const signInWithEmail = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default {
  signInWithFacebook,
  signInAnonymously,
  signUpWithEmail,
  signInWithEmail,
  signOut,  
};
