/* eslint-disable no-useless-constructor */
import React from 'react';
import { YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { decode, encode } from 'base-64';
import AppNavigator from './AppNavigator';

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
