import React from  'react'
import {
    createStackNavigator
} from 'react-navigation-stack'
import Levels from './screens/Levels'
import KanjiGroup from './screens/KanjiGroup'
import KanjiLearning from './screens/KanjiLearning'
import KanjiDetail from './screens/KanjiDetail';
const Appnavigator = createStackNavigator({
    Levels: {
        screen: Levels
    },
    KanjiGroup: {
        screen: KanjiGroup
    },
    KanjiLearning: {
        screen: KanjiLearning
    },
    KanjiDetail :{
        screen : KanjiDetail
    },
})
export default Appnavigator;