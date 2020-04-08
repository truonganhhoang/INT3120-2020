import React from 'react';
import { 
  StyleSheet,YellowBox
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import AppNavigator from './AppNavigator'
import AddData from './screens/Adddata';
import KanjiScreen from './screens/KanjiDetail'
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const AppContainer  =  createAppContainer(AppNavigator);
import firebase from './config/firebase';
export default class App extends React.Component {
  
  render(){
  
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
    //return(<AddData/>)
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
