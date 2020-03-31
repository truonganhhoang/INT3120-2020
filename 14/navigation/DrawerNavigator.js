import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from '../Screens/Home';
import Word from '../Screens/Word';
import DrawerContent from '../components/DrawerContent'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: Home },
        Word: { screen: Word },
    },
    {
        contentComponent: DrawerContent
    }
    );

export default DrawerNavigator;