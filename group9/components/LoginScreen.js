import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from './firebaseApi/auth';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In With Facebook" onPress={() => auth.signInWithFacebook()} />
        <Button title="Sign In Anonymously" onPress={() => auth.signInAnonymously()} />
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
