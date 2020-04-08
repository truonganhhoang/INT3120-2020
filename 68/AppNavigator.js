import React from  'react'
import {
    createStackNavigator
} from 'react-navigation-stack'
import Levels from './screens/Levels'
import KanjiGroup from './screens/KanjiGroup'
import KanjiLearning from './screens/KanjiLearning'
import KanjiDetail from './screens/KanjiDetail';
import KanjiGroupDetail from './screens/KanjiGroupDetail'
import KanjiChallenge1 from './screens/KanjiChallenge1'
import KanjiFlashCards from './screens/KanjiFlashCards'
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
    KanjiGroupDetail: {
        screen: KanjiGroupDetail
    },
    KanjiChallenge1: {
        screen: KanjiChallenge1
    },
    KanjiFlashCards: {
        screen: KanjiFlashCards
    }
})
export default Appnavigator;