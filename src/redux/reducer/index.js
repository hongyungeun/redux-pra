import { combineReducers } from "redux";
import callReducer from "./callReducer";
import counterReducer from "./counterReducer";
export default combineReducers({
  counter: counterReducer,
  call: callReducer,
});
