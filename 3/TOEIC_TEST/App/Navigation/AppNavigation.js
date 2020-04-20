import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainBody from '../Components/MainBody'
import Search from '../Components/Search'
import Meaning from '../Components/Meaning'
import LearnWord from '../Components/LearnWord'
import TestList from '../Components/TestList'
import TestBody from '../Components/TestBody'
import RecentAnswerList from '../Components/RecentAnswerList'
import RecentAnswer from '../Components/RecentAnswer'
import WrongAnswerList from '../Components/WrongAnswerList'
import WrongAnswer from '../Components/WrongAnswer'
import BookmarkQuestionList from '../Components/BookmarkQuestionList'
import BookmarkQuestion from '../Components/BookmarkQuestion'
const AppNavigator = createStackNavigator(
        {
                MainBody: { screen: MainBody },
                Search: { screen: Search },
                Meaning: { screen: Meaning },
                LearnWord: { screen: LearnWord },
                TestList: { screen: TestList },
                TestBody: { screen: TestBody },
                RecentAnswerList: { screen: RecentAnswerList },
                RecentAnswer: { screen: RecentAnswer },
                WrongAnswerList: { screen: WrongAnswerList },
                WrongAnswer: { screen: WrongAnswer },
                BookmarkQuestionList: { screen: BookmarkQuestionList },
                BookmarkQuestion: { screen: BookmarkQuestion }
        },
        {
                defaultNavigationOptions: { headerShown: false }
        }
);

export default createAppContainer(AppNavigator);