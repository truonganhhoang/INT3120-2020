import { SELECT_DRAWER_ITEM, CHANGE_DRAWER_STATUS } from '../constants/actionTypes';

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