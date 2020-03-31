import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login screen</Text>
        <Button
          title="Go to Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}