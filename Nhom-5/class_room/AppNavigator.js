import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Cards from './screens/Cards';
import Card from './screens/Card';

const AppNavigator = createStackNavigator({
  Cards: {
    screen: Cards,
  },
  Card: {
    screen: Card,
  },
});

export default AppNavigator;
