import React, { Component } from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import MenuFooter from './src/components/screens/MenuTab';
// import Icon from 'react-native-vector-icons/FontAwesome'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MenuFooter></MenuFooter>
        
      </View>
    )
  }
}
