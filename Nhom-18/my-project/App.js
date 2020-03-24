/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AppRegistry } from 'react-native';

import Splash from './App/screen/Splash'
import Home from './App/screen/Home'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {startScreen: 'Splash'};
    setTimeout(() => {
      console.log('Loading Splash')
      this.setState({startScreen: 'Home'})
    }, 5000)
  }

  render() {
      
      const { startScreen } = this.state
      let mainScreen = startScreen === 'Splash' ? <Splash/> : <Home/>
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

