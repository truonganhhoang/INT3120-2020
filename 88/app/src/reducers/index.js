import { combineReducers } from 'redux';

import mainReducer from './main';
import UIReducer from './ui';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  main: mainReducer,
  ui: UIReducer
});

export default rootReducer;