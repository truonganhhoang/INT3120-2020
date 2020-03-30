import React from  'react'
import {
    createStackNavigator
} from 'react-navigation-stack'
import Levels from './screens/Levels'
import KanjiGroup from './screens/KanjiGroup'
import KanjiLearning from './screens/KanjiLearning'
const Appnavigator = createStackNavigator({
    Levels: {
        screen: Levels
    },
    KanjiGroup: {
        screen: KanjiGroup
    },
    KanjiLearning: {
        screen: KanjiLearning
    }
})
export default Appnavigator;