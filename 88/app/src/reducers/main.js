import {GO_TO_PAGE, CHANGE_HEADER} from '../constants/actionTypes';

const initialState = {
  page: 'Home',
  header: 'JavaScript Tutorial',
};

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
        page: action.payload,
      };
    case CHANGE_HEADER:
      return {
        ...state,
        header: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;

