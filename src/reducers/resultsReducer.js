import { X_WINS, O_WINS, TIE } from "../helpers/actionTypes";

const initialState = {
  win: null,
  draw: false,
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case X_WINS:
      return {
        win: "X",
        draw: false,
      };
    case O_WINS:
      return {
        win: "O",
        draw: false,
      };
    case TIE:
      return { win: null, draw: true };
    default:
      return state;
  }
};
