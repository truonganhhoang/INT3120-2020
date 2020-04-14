import { GO_TO_PAGE } from '../constants/actionTypes';

/**
 * Go to another page of this app
 * @param {String} name 
 */
export const goToPage = (name) => {
  return {
    type: GO_TO_PAGE,
    payload: name
  }
};