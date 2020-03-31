import { CHANGE_NAVBAR } from '../constants/actionTypes'

const initialState = {
  isArrow = false,
  title: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAVBAR:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}