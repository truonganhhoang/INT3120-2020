import React from 'react';
import { StyleSheet, Text, View } from react-native
import { createSwitchNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>

        </Text>
      </View>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator ({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})