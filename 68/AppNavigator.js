import React from  'react'
import {
    createStackNavigator
} from 'react-navigation-stack'
import Categories from './screens/Categories'
import Category from './screens/Category';
import KanjiDetail from './screens/KanjiDetail';
const Appnavigator = createStackNavigator({
    
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    },
    KanjiDetail :{
        screen : KanjiDetail
    },

})
export default Appnavigator;