import * as Facebook from 'expo-facebook';
import firebase from './firebaseInit';
import { addInfo } from './user';

const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync('299759954328219');
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      const info = await firebase.auth().signInWithCredential(credential);
      await addInfo(info.user);
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
    let info = {
      createdAt: Date.now(),
      displayName: "Your Name",
      email: email,
      phoneNumber: "012345678",
      photoURL: "",
    };
    await addInfo(info);
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

const linkWithFacebook = async () => {
  try {
    await Facebook.initializeAsync('299759954328219');
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      await firebase.auth().linkWithCredential(credential);
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

const linkWithEmail = async (email, password) => {
  try {
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    await firebase.auth().currentUser.linkWithCredential(credential);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const reauthenticateWithPassword = async (currentPassword) => {
  try {
    let user = firebase.auth().currentUser;
    let credential = await firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    if (await user.reauthenticateWithCredential(credential)) return [true, ''];
    else return [false, 'Wrong current password'];
  } catch (err) {
    return [false, err];
  }
};

const changePassword = async (currentPassword, newPassword) => {
  let reauth = await reauthenticateWithPassword(currentPassword);
  if (!reauth[0]) {
    return reauth;
  }
  try {
    await firebase.auth().currentUser.updatePassword(newPassword);
    return [true, 'Password changed successfully'];
  } catch (err) {
    return [false, err];
  }
};

export default {
  signInWithFacebook,
  signInAnonymously,
  signUpWithEmail,
  signInWithEmail,
  signOut,
  linkWithEmail,
  linkWithFacebook,
  reauthenticateWithPassword,
  changePassword,
};
