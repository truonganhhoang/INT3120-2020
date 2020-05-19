import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from '../Screens/Home';
import Word from '../Screens/Word';
import FavoriteQuestion from '../Screens/FavoriteQuestion';
import EnglishApp from '../Screens/EnglishApp';
import Setting from '../Screens/Setting';
import DrawerContent from '../components/DrawerContent'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: Home },
        Word: { screen: Word },
        //FavoriteQuestion: { screen: FavoriteQuestion },
        EnglishApp: { screen: EnglishApp },
        Setting: { screen: Setting }
    },
    {
        contentComponent: DrawerContent
    }
    );

export default DrawerNavigator;