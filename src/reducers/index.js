import { combineReducers } from "redux";
import { boardReducer } from "./boardReducers";
import { playerReducer } from "./playerReducer";
import { resultReducer } from "./resultsReducer";

export default combineReducers({
  board: boardReducer,
  players: playerReducer,
  result: resultReducer,
});
