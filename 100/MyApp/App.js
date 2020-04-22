import React, { Component } from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import MyDrawer from './src/components/routes/MyDrawer';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyDrawer />
      </View>
    )
  }
}
