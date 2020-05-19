import { createStore } from "redux";
import reducer from "./reducer/reducer";

// tao ra stores
const store = createStore(reducer);
export default store;