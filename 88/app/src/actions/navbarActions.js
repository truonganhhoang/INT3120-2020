import {
  CHANGE_NAV_ICON,
  CHANGE_NAV_HEADER,
  CHANGE_NAV
} from '../constants/actionTypes';

export const changeNavIcon = (isArrow) => {
  return {
    type: CHANGE_NAV_ICON,
    payload: {
      arrow: isArrow
    }
  }
}

export const changeNavHeader = (header) => {
  return {
    type: CHANGE_NAV_HEADER,
    payload: {
      header
    }
  }
}

export const changeNav = (isArrow, header) => {
  return {
    type: CHANGE_NAV,
    payload: {
      arrow: isArrow,
      header
    }
  }
}