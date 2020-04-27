import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
