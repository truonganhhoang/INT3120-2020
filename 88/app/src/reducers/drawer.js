import { SELECT_DRAWER_ITEM, CHANGE_DRAWER_STATUS } from '../constants/actionTypes';

/**
 * @type {Object}
 * @property {boolean} isOpen - drawer is open or close
 * @property {number} selectedIndex - index of focused item
 */
const initialState = {
  // isOpen: false,
  selectedIndex: 0
}

/**
 * Change status of drawer and its items
 * @param {Object} state - have structure of initial state
 * @param {Object} action 
 */
const selectDrawerItem = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DRAWER_ITEM:
      return {
        ...state,
        selectedIndex: action.payload
      };
    default:
      return state;
  }
}

export default selectDrawerItem;