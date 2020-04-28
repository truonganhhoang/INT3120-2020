import { combineReducers } from "redux";
import taskReducers from "./taskReducers"
// combineReducers dung de tom gon cac Reducers voi nhau
const allReducers = combineReducers({
    taskReducers
});

export default allReducers;