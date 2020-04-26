import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from '../src/screen/splash'
import Home from '../src/screen/home/pages'
import Drawer from '../src/base/drawer/index'
import LearnTheoryScreen from '../src/screen/LearnTheory/pages/index'
import LearnDetailsScreen from '../src/screen/LearnTheory/pages/learnDetailsScreen'
import ListBoard from '../src/screen/ListBoard/index'
import Tips from '../src/screen/Tips/index'
import SearchScreen from '../src/screen/SearchScreen/index'

const Stack = createStackNavigator({
    Splash:{screen: Splash},
    Home:{screen: Home},
    LearnTheoryScreen: {screen: LearnTheoryScreen},
    LearnDetailsScreen: { screen: LearnDetailsScreen},
    ListBoard: {screen: ListBoard },
    Tips: {screen: Tips },
    SearchScreen: {screen: SearchScreen},
},
{
    headerMode: 'none'
})

const Router = createDrawerNavigator(
    {
        Splash: { screen: Splash },
        Stack: { screen: Stack }
    },
    {
        contentComponent: props => <Drawer {...props} />,
        initialRouteName: 'Splash',
        drawerWidth: Dimensions.get('screen').width * 3 / 5 > 280 ? 280 : Dimensions.get('screen').width * 2 / 3
    }
);

const App = createAppContainer(Router);

export default App;
