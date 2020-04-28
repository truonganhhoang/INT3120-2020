import {CHANGE_HOME_TAB} from '../constants/actionTypes';

/**
 * Change tab to index
 * @param index {number} - tab's index
 */
export const changeTab = (index) => {
  return {
    type: CHANGE_HOME_TAB,
    payload: index,
  };
};
