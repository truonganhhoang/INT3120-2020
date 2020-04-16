import { CHANGE_NAV_ICON } from '../constants/actionTypes';

const initialState = {
  isArrow: false
}

/**
 * Manage UI state
 * @param {Object} state - contains all states
 * @param {*} action - have type and payload
 */
const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV_ICON:
      return {
        ...state,
        isArrow: action.payload
      };
    default:
      return state;
  }
};

export default UIReducer;