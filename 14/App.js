import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import Home from './Screens/Home';
import Word from './Screens/Word';
import Exam from './Screens/Exam';
import Setting from './Screens/Setting';
import NewWordList from './Screens/NewWordList';
import EnglishApp from './Screens/EnglishApp';
import FavoriteQuestion from './Screens/FavoriteQuestion';

const Navigator = createStackNavigator({
  DrawerNavigator: {screen:DrawerNavigator},
  Home: { screen: Home},
  Word: { screen: Word },
  Exam: { screen: Exam},
  FavoriteQuestion: {screen: FavoriteQuestion},
  EnglishApp: {screen: EnglishApp},
  Setting: {screen: Setting},
  NewWordList: {screen: NewWordList}
},
{ 
  headerMode: 'none',
},
);

const App = createAppContainer(Navigator);

export default App;
