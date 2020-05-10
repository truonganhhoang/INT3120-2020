import React from 'react';
import {
  YellowBox
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import { decode, encode } from 'base-64';
import AppNavigator from './AppNavigator';
import AddData from './screens/Adddata';

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }

const AppContainer = createAppContainer(AppNavigator);
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
    //return (<AddData />);
    return (
      <AppContainer />
    );
  }
}

export default App;
