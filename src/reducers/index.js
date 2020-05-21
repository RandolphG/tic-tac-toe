import { combineReducers } from "redux";
import { boardReducer } from "./boardReducers";
import { playerReducer } from "./playerReducer";

export default combineReducers({ board: boardReducer, players: playerReducer });
