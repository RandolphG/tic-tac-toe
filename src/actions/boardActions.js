import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

/**
 *
 * @param cell
 * @returns {{type: string, cell: *}}
 */
export const drawXAction = (cellIndex) => {
  return { type: DRAW_X, cellIndex };
};

/**
 *
 * @param cell
 * @returns {{type: string, cell: *}}
 */
export const drawYAction = (cellIndex) => {
  return { type: DRAW_O, cellIndex };
};
