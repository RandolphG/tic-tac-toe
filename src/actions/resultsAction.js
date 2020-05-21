import { O_WINS, X_WINS, TIE } from "../helpers/actionTypes";
import { checkWins } from "../helpers/resultHelper";

/**
 * check the results of the match
 * @param board
 * @returns {{type: string}}
 */
export const checkResult = (board) => {
  if (checkWins(board, "X")) {
    return { type: X_WINS };
  } else if (checkWins(board, "O")) {
    return { type: O_WINS };
  } else {
    const check = board.filter((symbol) => symbol === null);
    if (check.length === 0) {
      return { type: TIE };
    } else {
      return { type: "RANDOM" };
    }
  }
};
