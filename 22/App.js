import * as React from 'react';
import { SwitchNavigator,StackNavigator } from 'react-navigation';
import styles from './assets/css/css';
import Welcome from './components/Welcome';
import Menu2 from './components/Menu2';
import AddWord from './components/AddWord';
import ListWords2 from './components/ListWords2';
import Tutorial from './components/Tutorial';
import TickWords from './components/TickWords';
import SearchWords from './components/SearchWords';

export default SwitchNavigator(
  {
     Welcome:Welcome,
     Menu: Menu2,
     Add:AddWord,
     List:ListWords2,
     Tutorial:Tutorial,
     Tick:TickWords,
     Search:SearchWords,
  },
  {
    initialRouteName: 'Menu',
  }
);