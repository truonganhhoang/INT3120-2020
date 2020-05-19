import {combineReducers} from 'redux';

import mainReducer from './main';
import UIReducer from './ui';
import homeReducer from './home';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  main: mainReducer,
  home: homeReducer,
  ui: UIReducer,
});

export default rootReducer;

