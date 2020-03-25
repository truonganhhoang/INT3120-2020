import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation'
import AppNavigator from './AppNavigator'
const AppContainer  =  createAppContainer(AppNavigator);
export default class App extends React.Component {
  
  render(){
    const {categories} = this.state;
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});
