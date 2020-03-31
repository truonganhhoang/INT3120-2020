import React, { Component } from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/components/Router';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Router></Router>
      </View>
    )
  }
}
