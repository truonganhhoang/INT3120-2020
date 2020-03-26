import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
      </View>
    )
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
