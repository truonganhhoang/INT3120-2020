import * as Facebook from 'expo-facebook';
import firebase from './firebaseInit';

const signInWithFacebook = async () => {
  await Facebook.initializeAsync('299759954328219');
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = this.firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        // Handle Errors here.
      });
  }
};

const signInAnonymously = async () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
    });
};

export { signInWithFacebook, signInAnonymously };
