import {
  CHANGE_NAV_ICON,
  CHANGE_NAV_HEADER,
  CHANGE_NAV
} from '../constants/actionTypes';

/**
 * Initial state of navigation bar
 * @type {Object}
 * @property {boolean} isArrow - navbar icon is arrow (menu icon in the remaining case)
 * @property {string} header - header on the navbar
 */
const initialState = {
  isArrow: false,
  header: 'JavaScript Tutorial'
};

/**
 * Change status of nav bar
 * @param {Object} state - have structure of initial state
 * @param {Object} action 
 */
const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV_ICON:
      return {
        ...state,
        isArrow: action.payload
      }
    case CHANGE_NAV_HEADER:
      return {
        ...state,
        header: action.payload
      }
    case CHANGE_NAV:
      return {
        isArrow: action.payload.arrow,
        header: action.payload.header
      }
    default: 
      return state;
  }
}

export default navigationReducer;