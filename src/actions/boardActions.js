import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

/**
 *
 * @param cell
 * @returns {{type: string, cell: *}}
 */
export const drawXAction = (cell) => {
  return { type: DRAW_X, cell };
};

/**
 *
 * @param cell
 * @returns {{type: string, cell: *}}
 */
export const drawYAction = (cell) => {
  return { type: DRAW_O, cell };
};
