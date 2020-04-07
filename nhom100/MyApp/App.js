import React, { Component } from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
// import MenuTab from './src/components/screens/MenuTab';
import MyDrawer from './src/components/screens/MyDrawer';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyDrawer />
      </View>
    )
  }
}
