import React from "react";
import { SquareStyled } from "../GlobalStyles";
import Cross from "./Cross";
import Zero from "./Zero";
import { connect } from "react-redux";
import { drawXAction, drawYAction } from "../actions/boardActions";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Square = (props) => {
  const { symbol, index, draw } = props;
  return (
    <SquareStyled onClick={() => draw(index)}>
      {symbol ? symbol === "X" ? <Cross /> : <Zero /> : ""}
    </SquareStyled>
  );
};

export default connect(null, (dispatch) => ({
  draw: (cellIndex) => {
    dispatch(drawXAction(cellIndex));
  },
}))(Square);
