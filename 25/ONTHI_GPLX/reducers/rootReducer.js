// import React from 'react';
// import { createStore, combineReducers } from 'redux';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import modalReducer from '../screens/initExam';
// const rootReducer = combineReducers({
//     modalReducer,
// });

// const INITIAL_STATE = {}

// const store = createStore(rootReducer, INITIAL_STATE)

// function App() {
//     return (
//         <Provider store = {store}>
//             <Counter />
//             <Name />
//         </Provider>
//     );
// }

// function Counter () {
//     const count = useSelector(state => ({
//         ...state.counterReducer
//     }));
//     const dispatch = useDispatch();
//     function incrementCount() {
//         dispatch({
//             type: "INCREMENT_COUNT",
//         })
//     }
//     return (
//         <>
            
//         </>
//     );
// }

// function Name() {
//     const name = useSelector(state => state.name)
//     const dispatch = useDispatch()
//     function handlerUpdateName (event) {
//         dispatch({
//             type: "UPDATE_NAME",
//             payload: event.target.value,
//         })
//     }
//     return (
//         <>
        
//         </>
//     )
// }