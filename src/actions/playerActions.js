import { PLAYER_O, PLAYER_X, TURN } from "../helpers/actionTypes";

/**
 *
 * @param player
 * @returns {{type: string, player: *}}
 */
export const selectXPlayerAction = (player) => {
  return {
    type: PLAYER_X,
    player,
  };
};

/**
 *
 * @param player
 * @returns {{type: string, player: *}}
 */
export const selectOPlayerAction = (player) => {
  return {
    type: PLAYER_O,
    player,
  };
};

/**
 * toggle turn action
 * @returns {{type: string}}
 */
export const toggleTurnAction = () => {
  return {
    type: TURN,
  };
};
