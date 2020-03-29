import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginScreen from './components/LoginScreen'
import LoadingScreen from './components/LoadingScreen'
import DashboardScreen from './components/DashboardScreen'
import UserScreen from './components/UserScreen'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
  UserScreen: UserScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
