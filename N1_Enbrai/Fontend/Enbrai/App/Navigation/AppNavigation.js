import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../Containers/HomeScreen'
import AccountScreen from '../Containers/AccountScreen'
import HomeStudyScreen from '../Containers/HomeStudyScreen'
import HomeSettingScreen from '../Containers/HomeSettingScreen'
import HomeUpdateScreen from '../Containers/HomeUpdateScreen'
import PickNewWordScreen from '../Containers/PickNewWordScreen'
import ChangeLanguageScreen from '../Containers/ChangeLanguageScreen'
import TopicScreen from '../Containers/TopicScreen'
import SetNumberWordScreen from '../Containers/SetNumberWordScreen'
import NotificationScreen from '../Containers/NotificationScreen'
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    AccountScreen: {
      screen: AccountScreen
    },
    HomeStudyScreen: {
      screen: HomeStudyScreen
    },
    HomeSettingScreen: {
      screen: HomeSettingScreen
    },
    HomeUpdateScreen: {
      screen: HomeUpdateScreen
    },
    PickNewWordScreen: {
      screen: PickNewWordScreen
    },
    ChangeLanguageScreen: {
      screen: ChangeLanguageScreen
    },
    TopicScreen: {
      screen: TopicScreen
    },
    SetNumberWordScreen: {
      screen: SetNumberWordScreen
    },
    NotificationScreen:{
      screen: NotificationScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen'
  }
)
const AppNavigation = createAppContainer(AppNavigator);
export default AppNavigation;