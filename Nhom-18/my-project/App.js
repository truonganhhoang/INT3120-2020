/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Splash from './screens/Splash'
import Index from './screens/Index'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {startScreen: 'Splash'};
    setTimeout(() => {
      console.log('Loading Splash')
      this.setState({startScreen: 'Index'})
    }, 5)
  }

  render() {
      const { startScreen } = this.state
      let mainScreen = startScreen === 'Splash' ? <Splash/> : <Index/>
      return mainScreen    
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: 40,
    }
})

