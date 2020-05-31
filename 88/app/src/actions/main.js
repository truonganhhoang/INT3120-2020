import {GO_TO_PAGE, CHANGE_HEADER} from '../constants/actionTypes';

/**
 * Change navigation's header
 * @param {String} name
 */
export const changeHeader = (name) => {
  return {
    type: CHANGE_HEADER,
    payload: name,
  };
};

/**
 * Go to another page of this app
 * @param {String} name
 */
export const goToPage = (name) => {
  return {
    type: GO_TO_PAGE,
    payload: name,
  };
};

