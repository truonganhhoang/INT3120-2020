import {
  CHANGE_NAV_ICON,
  CHANGE_NAV_HEADER,
  CHANGE_NAV
} from '../constants/actionTypes';

/**
 * Create a change nav icon action
 * @param {boolean} isArrow 
 */
export const changeNavIcon = (isArrow) => {
  return {
    type: CHANGE_NAV_ICON,
    payload: {
      arrow: isArrow
    }
  }
}

/**
 * Create a change nav icon action
 * @param {String} header 
 */
export const changeNavHeader = (header) => {
  return {
    type: CHANGE_NAV_HEADER,
    payload: {
      header
    }
  }
}

/**
 * Create a change nav icon action
 * @param {boolean} isArrow 
 * @param {String} header 
 */
export const changeNav = (isArrow, header) => {
  return {
    type: CHANGE_NAV,
    payload: {
      arrow: isArrow,
      header
    }
  }
}