import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

/**
 * draw the X marker on the board
 * @returns {{type: string, cell: *}}
 * @param cellIndex
 */
export const drawXAction = (cellIndex) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: DRAW_X, cellIndex });
      resolve();
    });
  };
};

/**
 * draw the O marker on the board
 * @returns {{type: string, cell: *}}
 * @param cellIndex
 */
export const drawOAction = (cellIndex) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: DRAW_O, cellIndex });
      resolve();
    });
  };
};
