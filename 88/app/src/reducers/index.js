import { combineReducers } from 'redux';

import navigationReducer from './navigation';
import drawerReducer from './drawer';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  navigation: navigationReducer,
  drawer: drawerReducer
});

export default rootReducer;