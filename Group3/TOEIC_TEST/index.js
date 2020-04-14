/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from './App/Navigation/AppNavigation';
import bgMessaging from './App/Services/bgMessaging';
import App from './App'
AppRegistry.registerComponent(appName, () => AppNavigation);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
