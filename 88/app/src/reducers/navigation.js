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

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV_ICON:
      return {
        ...state,
        isArrow: action.payload.arrow
      }
    case CHANGE_NAV_HEADER:
      return {
        ...state,
        header: action.payload.header
      }
    case CHANGE_NAV_ICON:
      return {
        isArrow: action.payload.arrow,
        header: action.payload.header
      }
    default: 
      return state;
  }
}

export default navbarReducer;