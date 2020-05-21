import { combineReducers } from "redux";
import { boardReducer } from "./boardReducers";

export default combineReducers({ board: boardReducer });
