import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainBody from '../Components/MainBody'
import Search from '../Components/Search'
import Meaning from '../Components/Meaning'
import LearnWord from '../Components/LearnWord'
const AppNavigator = createStackNavigator({
        MainBody: { screen: MainBody },
        Search: { screen: Search },
        Meaning: { screen: Meaning },
        LearnWord: { screen: LearnWord }

});

export default createAppContainer(AppNavigator);