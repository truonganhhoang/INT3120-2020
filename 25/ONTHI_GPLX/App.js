import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RootNavigator from './RootNavigator';

import modalReducer from './reducers/modalReducer';
import playVideo from './reducers/playVideo';

const rootReducer = combineReducers({
    modalReducer,
    playVideo
});

const INITIAL_STATE = {}

const store = createStore(rootReducer, INITIAL_STATE)
function App() {
    console.disableYellowBox = true;
    return <Provider store = {store}>
        <RootNavigator />
    </Provider>
}
export default App;