import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firebase from './firebaseApi/firebaseInit';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/icon.png')} style={{ width: 100, height: 100 }} />
        <Text style={styles.text}> Time Table </Text>
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
  text: {
    fontSize: 25,
    margin: 10,
  },
});
