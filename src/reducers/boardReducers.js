import { DRAW_X, DRAW_O } from "../helpers/actionTypes";

const initialState = [null, null, null, null, null, null, null, null, null];

/**
 *
 * @param state
 * @param action
 */
export const boardReducer = (state = initialState, action) => {
  const newState = [...state];
  switch (action.type) {
    case DRAW_X:
      newState[action.cell] = "X";
      return newState;
    case DRAW_O:
      newState[action.cell] = "Y";
      return newState;
    default:
      return state;
  }
};
