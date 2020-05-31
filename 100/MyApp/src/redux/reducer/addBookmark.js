import { combineReducers } from 'redux';
import reducer from './reducer';

const aReducer = combineReducers({
    onBookmark : reducer
});

export default aReducer;
