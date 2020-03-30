import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import Home from './Screens/Home';
import Word from './Screens/Word';

const Navigator = createStackNavigator({
  DrawerNavigator: {screen:DrawerNavigator},
  Home: { screen: Home },
  Word: { screen: Word },
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
},
);

const App = createAppContainer(Navigator);

export default App;
