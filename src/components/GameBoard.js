import React from "react";
import Square from "./Square";
import { GameBoardStyled } from "../GlobalStyles";
import { connect } from "react-redux";
import Summary from "./Summary";
const GameBoard = (props) => {
  const { board } = props;

  return (
    <>
      <Summary />
      <GameBoardStyled>
        {board.map((symbol, i) => (
          <Square key={i} index={i} symbol={symbol} />
        ))}
      </GameBoardStyled>
    </>
  );
};

export default connect(({ board }) => ({ board }))(GameBoard);
