import React from 'react'
import {
    createStackNavigator 
} from 'react-navigation'
import Categories from './screens/Categories'
import Category from './screens/Category'
const AppNavigator = createStackNavigator({
    Categories: {
        screens: Categories
    },
    Category: {
        screens: Category
    }
});
export default AppNavigator;