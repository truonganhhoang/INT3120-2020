import { SELECT_DRAWER_ITEM, CHANGE_DRAWER_STATUS } from '../constants/actionTypes';

/**
 * Make drawer open or close
 * @param {boolean} isOpen
 */
export const openDrawer = (isOpen) => {
  return {
    type: CHANGE_DRAWER_STATUS,
    payload: isOpen
  }
}

/**
 * Change drawer item is focused
 * @param {number} index 
 */
export const selectDrawerItem = (index) => {
  return {
    type: SELECT_DRAWER_ITEM,
    payload: index
  }
};