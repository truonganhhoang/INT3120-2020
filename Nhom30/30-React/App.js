
import React from 'react';
import { View } from 'react-native';
import AppRouter from './route/navigation'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    )
  }

}
