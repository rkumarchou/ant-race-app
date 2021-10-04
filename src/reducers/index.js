import { combineReducers } from "redux";
import antsReducer from "./antReducer";

const rootReducer = combineReducers({
  ants: antsReducer,
});

export default rootReducer;
