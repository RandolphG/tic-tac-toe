import React from "react";
import Square from "./Tile/Square";
import { GameBoardStyled, Holder } from "../GlobalStyles";
import { connect } from "react-redux";
import Summary from "./Summary";

/**
 * the tic tac toe game board
 * @param props
 * @returns {*}
 * @constructor
 */
const GameBoard = (props) => {
  const { board } = props;

  return (
    <Holder>
      <Summary />
      <GameBoardStyled>
        {board.map((symbol, i) => (
          <Square key={i} index={i} symbol={symbol} />
        ))}
      </GameBoardStyled>
    </Holder>
  );
};

export default connect(({ board }) => ({ board }))(GameBoard);
