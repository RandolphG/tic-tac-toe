import React from "react";
import Square from "./Square";
import { GameBoardStyled } from "../GlobalStyles";
import { connect } from "react-redux";

const GameBoard = (props) => {
  const board = props.board;

  return (
    <GameBoardStyled>
      {board.map((symbol, i) => (
        <Square key={i} index={i} symbol={symbol} />
      ))}
    </GameBoardStyled>
  );
};

export default connect(({ board }) => ({ board }))(GameBoard);
