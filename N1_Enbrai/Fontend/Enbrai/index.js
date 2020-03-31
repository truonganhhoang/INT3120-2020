/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/Navigation/AppNavigation';
//import App from './App/Components/ChangeLanguage'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
