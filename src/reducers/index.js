import IncDec from "./IncDec";
import TodoReducer from "./TodoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ IncDec, TodoReducer });

export default rootReducer;
