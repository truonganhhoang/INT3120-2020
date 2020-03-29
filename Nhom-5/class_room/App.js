import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Card from './components/Card';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default App;
