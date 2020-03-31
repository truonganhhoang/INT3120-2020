import * as React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import styles from './assets/css/css';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import AddWord from './components/AddWord';

export default SwitchNavigator(
  {
     Home: Welcome,
     Start: Menu,
     Add:AddWord,
  },
  {
    initialRouteName: 'Add',
  }
);