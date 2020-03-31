import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/homescreen'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Home screen</Text>
      </View>
    );
  }
static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}