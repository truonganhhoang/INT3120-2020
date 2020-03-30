import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signInWithFacebook, signInAnonymously } from './firebaseApi/auth';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In With Facebook" onPress={() => signInWithFacebook()} />
        <Button title="Sign In Anonymously" onPress={() => signInAnonymously()} />
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
