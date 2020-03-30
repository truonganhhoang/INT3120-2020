import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import Home from './Screens/Home';
import Word from './Screens/Word';
import NewWordList from './Screens/NewWordList';

const Navigator = createStackNavigator({
  DrawerNavigator: {screen:DrawerNavigator},
  Home: { screen: Home },
  Word: { screen: Word },
  NewWordList: {screen: NewWordList}
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
},
);

const App = createAppContainer(Navigator);

export default App;
