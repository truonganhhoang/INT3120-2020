import { combineReducers } from 'redux';

import navbarReducer from './navbar';

const rootReducer = combineReducers({
  navbar: navbarReducer
});

export default rootReducer;