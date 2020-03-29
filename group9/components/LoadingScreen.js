import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as FirebaseApi from './firebaseApi';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.firebase_auth = FirebaseApi.Auth();
  }
  componentDidMount() {
    if (this.firebase_auth.checkIfLoggedIn()) {
      this.props.navigation.navigate('DashboardScreen');
    } else {
      this.props.navigation.navigate('LoginScreen');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LoadingScreen</Text>
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
