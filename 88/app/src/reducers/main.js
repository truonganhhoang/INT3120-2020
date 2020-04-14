import { GO_TO_PAGE } from '../constants/actionTypes';

const initialState = {
  page: 'Home'
}

/**
 * 
 * @param {Object} state - contains all states
 * @param {Object} action - have type and payload
 */
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
}

export default mainReducer;