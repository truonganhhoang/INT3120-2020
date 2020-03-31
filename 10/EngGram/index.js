/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import App from './Home';
//import App from './About';

AppRegistry.registerComponent(appName, () => App);
