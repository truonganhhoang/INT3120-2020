import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainBody from '../Components/MainBody'
import Search from '../Components/Search'
import Meaning from '../Components/Meaning'
import LearnWord from '../Components/LearnWord'
import TestList from '../Components/TestList'
import TestBody from '../Components/TestBody'
import TestRecentList from '../Components/TestRecentList'
import TestRecent from '../Components/TestRecent'
const AppNavigator = createStackNavigator(
        {
                MainBody: { screen: MainBody },
                Search: { screen: Search },
                Meaning: { screen: Meaning },
                LearnWord: { screen: LearnWord },
                TestList: { screen: TestList },
                TestBody: { screen: TestBody },
                TestRecentList: { screen: TestRecentList },
                TestRecent: { screen: TestRecent },
        },
        {
                defaultNavigationOptions: { headerShown: false }
        }
);

export default createAppContainer(AppNavigator);