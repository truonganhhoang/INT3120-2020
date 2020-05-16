import {
<<<<<<< HEAD
    createStackNavigator
} from 'react-navigation-stack'
import LoginScreen from './screens/LoginScreen'
import Levels from './screens/Levels'
import KanjiGroup from './screens/KanjiGroup'
import ProfileScreen from './screens/ProfileScreen'
import KanjiLearning from './screens/KanjiLearning'
=======
  createStackNavigator
} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import Levels from './screens/Levels';
import KanjiGroup from './screens/KanjiGroup';
import KanjiLearning from './screens/KanjiLearning';
>>>>>>> c3af9ead8d8760710bdc5c42bc09b5ce96505c78
import KanjiDetail from './screens/KanjiDetail';
import KanjiGroupDetail from './screens/KanjiGroupDetail';
import KanjiChallenge1 from './screens/KanjiChallenge1';
import KanjiFlashCards from './screens/KanjiFlashCards';
import KanjiTests from './screens/KanjiTests';
import FavoriteKanjiScreen from './screens/FavoriteKanjiScreen';

const Appnavigator = createStackNavigator({
<<<<<<< HEAD
    ProfileScreen: {
        screen: ProfileScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    FavoriteKanjiScreen: {
        screen: FavoriteKanjiScreen
    },
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
    },
    KanjiTests: {
        screen: KanjiTests
    }
})
export default Appnavigator;
=======
  LoginScreen: {
    screen: LoginScreen
  },
  FavoriteKanjiScreen: {
    screen: FavoriteKanjiScreen
  },
  Levels: {
    screen: Levels
  },
  KanjiGroup: {
    screen: KanjiGroup
  },
  KanjiLearning: {
    screen: KanjiLearning
  },
  KanjiDetail: {
    screen: KanjiDetail
  },
  KanjiGroupDetail: {
    screen: KanjiGroupDetail
  },
  KanjiChallenge1: {
    screen: KanjiChallenge1
  },
  KanjiFlashCards: {
    screen: KanjiFlashCards
  },
  KanjiTests: {
    screen: KanjiTests
  }
});
export default Appnavigator;
>>>>>>> c3af9ead8d8760710bdc5c42bc09b5ce96505c78
