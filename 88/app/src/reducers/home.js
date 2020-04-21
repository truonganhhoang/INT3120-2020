import {CHANGE_HOME_TAB} from '../constants/actionTypes';
const initialState = {
  tab: 0,
  course: '',
  lesson: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HOME_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
