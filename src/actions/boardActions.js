import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

/**
 *
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
 *
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
