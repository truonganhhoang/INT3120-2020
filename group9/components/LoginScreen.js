import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import * as Facebook from 'expo-facebook';

class LoginScreen extends Component {
  signInWithFacebook = async () => {
    await Facebook.initializeAsync('299759954328219');

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          // Handle Errors here.
        });
    }
  };

  signInAnonymously = async () => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        // Handle Errors here.
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In With Facebook" onPress={() => this.signInWithFacebook()} />
        <Button title="Sign In Anonymously" onPress={() => this.signInAnonymously()} />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
