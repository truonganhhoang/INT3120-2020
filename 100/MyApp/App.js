import React, { Component } from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import MyDrawer from './src/components/routes/MyDrawer';
import Stack1 from './src/components/routes/Stack1';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyDrawer />
        {/* <Stack1></Stack1> */}
      </View>
    )
  }
}
