import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Containers/HomeScreen';
import AccountScreen from '../Containers/AccountScreen';
import HomeStudyScreen from '../Containers/HomeStudyScreen';
import HomeSettingScreen from '../Containers/HomeSettingScreen';
import HomeUpdateScreen from '../Containers/HomeUpdateScreen';
import PickNewWordScreen from '../Containers/PickNewWordScreen';
import ChangeLanguageScreen from '../Containers/ChangeLanguageScreen';
import TopicScreen from '../Containers/TopicScreen';
import SetNumberWordScreen from '../Containers/SetNumberWordScreen';
import SetNotificationScreen from '../Containers/SetNotificationScreen';
import SignUpScreen from '../Containers/SignUpScreen';
import SignInScreen from '../Containers/SignInScreen';
import LoadingScreen from '../Containers/LoadingScreen';
import OnceTopicScreen from '../Containers/OnceTopicScreen';
import OnceSetNumberWordScreen from '../Containers/OnceSetNumberWordScreen';

const AppStackNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    AccountScreen: {
      screen: AccountScreen,
    },
    HomeStudyScreen: {
      screen: HomeStudyScreen,
    },
    HomeSettingScreen: {
      screen: HomeSettingScreen,
    },
    HomeUpdateScreen: {
      screen: HomeUpdateScreen,
    },
    PickNewWordScreen: {
      screen: PickNewWordScreen,
    },
    ChangeLanguageScreen: {
      screen: ChangeLanguageScreen,
    },
    TopicScreen: {
      screen: TopicScreen,
    },
    SetNumberWordScreen: {
      screen: SetNumberWordScreen,
    },
    SetNotificationScreen: {
      screen: SetNotificationScreen,
    },
    SignUpScreen: {
      screen: SignUpScreen,
    },
    SignInScreen: {
      screen: SignInScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);
const AppContainer = createStackNavigator(
  {
    LoadingScreen: {
      screen: LoadingScreen,
    },
    OnceTopicScreen: {
      screen: OnceTopicScreen,
    },
    OnceSetNumberWordScreen: {
      screen: OnceSetNumberWordScreen,
    },
    AppStackNavigation: {
      screen: AppStackNavigation,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoadingScreen',
  },
);
const AppNavigation = createAppContainer(AppContainer);
export default AppNavigation;
