import { CHANGE_NAV_ICON } from '../constants/actionTypes';

/**
 * Create a change nav icon action
 * @param {boolean} isArrow 
 */
export const changeNavIcon = (isArrow) => {
  return {
    type: CHANGE_NAV_ICON,
    payload: isArrow
  }
}