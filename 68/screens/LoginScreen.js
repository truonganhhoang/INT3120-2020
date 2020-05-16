/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
import React from 'react';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';
import {
  StyleSheet, View, Button, Dimensions
} from 'react-native';
import Login from '../components/Login';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class LoginScreen extends React.Component {
    static navigationOptions = () => ({
      title: 'Login',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006265',
      },
    });

    onSignIn = (googleUser) => {
      console.log(googleUser);
      // console.log('Google Auth Response', googleUser);
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          console.log(googleUser.getAuthResponse().id_token);
          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken,
          );
          // Sign in with credential from the Google user.
          firebase.auth().signInWithCredential(credential).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const { email } = error;
            // The firebase.auth.AuthCredential type that was used.
            const { credential } = error;
            // ...
          });
        } else {
          console.log('User already signed-in Firebase.');
        }
      });
    }

    isUserEqual = (googleUser, firebaseUser) => {
      if (firebaseUser) {
        const { providerData } = firebaseUser;
        for (let i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
              && providerData[i].uid === googleUser.getBasicProfile().getId()) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }

    signInWithGoogleAsync = async () => {
      try {
        const result = await Google.logInAsync({
          androidClientId: '376767086525-ufioo6rnbc890repj2b87c8tt0nqgml3.apps.googleusercontent.com',
          iosClientId: '376767086525-kgcvdp051mf3qe35na2cbg5vsipmd6e7.apps.googleusercontent.com',
          scopes: ['profile'],
        });
        if (result.type === 'success') {
          console.log('asdasd');
          const credential = firebase.auth.GoogleAuthProvider.credential(
            result.idToken,
            result.accessToken,
          );
          // Sign in with credential from the Google user.
          firebase.auth().signInWithCredential(credential);
          // console.log(result);
          // return result.accessToken;
        }
        console.log('asdasd');
        return { cancelled: true };
      } catch (e) {
        return { error: true };
      }
    }

    logInFacebook = async () => {
      try {
        await Facebook.initializeAsync('2936194473145634');
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInWithCredential(credential)
            .then((data) => { console.log(data); this.props.navigation.navigate('Levels'); })
            .catch((err) => console.log(err));
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`);
      }
    }

    logout = () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

    render() {
      return (
        <Login>
          <View style={styles.button}>
            <Button
              onPress={this.logInFacebook}
              title="Tiếp tục đăng nhập bằng Facebook"
              color="#4267b2"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.signInWithGoogleAsync}
              title="Tiếp tục đăng nhập bằng Google"
              color="#e73232"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.logout}
              title=" logout"
              color="#e73232"
            />
          </View>
        </Login>
      );
    }
}
const styles = StyleSheet.create({
  button: {
    marginTop: screen(5),
    width: screen(80),
    marginLeft: screen(10),
  }
});
