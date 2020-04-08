import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from './screens/Category';
import Categories from './screens/Categories';


const screen = {
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    }
}
//const AppNavigator = createStackNavigator(screen);

//export default createAppContainer(AppNavigator);