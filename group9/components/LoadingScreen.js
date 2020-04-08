import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firebase from './firebaseApi/firebaseInit';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

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
        this.props.navigation.navigate('HelloScreen');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#23a6d5', '#23d5ab']} style={styles.background}>
          <View style={styles.view}>
            <Image source={require('../image/icon.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.text}> TIME TABLE </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    margin: 10,
    letterSpacing: 4,
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
  },
});
