import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RootNavigator from './RootNavigator';

import modalReducer from './reactRedux/modalReducer';

const rootReducer = combineReducers({
    modalReducer,
});

const INITIAL_STATE = {}

const store = createStore(rootReducer, INITIAL_STATE)
function App() {
    return <Provider store = {store}>
        <RootNavigator />
    </Provider>
}
export default App;