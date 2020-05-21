import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

/**
 *
 * @returns {{type: string, cell: *}}
 * @param cellIndex
 */
export const drawXAction = (cellIndex) => {
  return { type: DRAW_X, cellIndex };
};

/**
 *
 * @returns {{type: string, cell: *}}
 * @param cellIndex
 */
export const drawOAction = (cellIndex) => {
  return { type: DRAW_O, cellIndex };
};
