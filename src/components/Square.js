import React from "react";
import { SquareStyled } from "../GlobalStyles";
import Cross from "./Cross";
import Zero from "./Zero";
import { connect } from "react-redux";
import { drawXAction, drawOAction } from "../actions/boardActions";
import { toggleTurnAction } from "../actions/playerActions";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 * TODO disable the square if already selected
 */
const Square = (props) => {
  const { symbol, index, draw, players } = props;
  return (
    <SquareStyled
      className={{ cell: true, disabled: symbol }}
      onClick={() => draw(players, index)}
    >
      {symbol ? symbol === "X" ? <Cross /> : <Zero /> : ""}
    </SquareStyled>
  );
};

/**
 *
 * @param state
 * @returns {{turn: (string)}}
 */
const mapStateToProps = ({ board, players }) => ({ board, players });

/**
 *
 * @param dispatch
 * @returns {{draw: draw}}
 */
const mapDispatchToProps = (dispatch) => ({
  draw: (players, cellIndex) => {
    if (players[players.turn] === "X") {
      dispatch(drawXAction(cellIndex));
    } else {
      dispatch(drawOAction(cellIndex));
    }
    dispatch(toggleTurnAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
