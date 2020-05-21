import React from "react";
import Square from "./Square";
import { GameBoardStyled } from "../GlobalStyles";
import { connect } from "react-redux";

const GameBoard = (props) => {
  const { board, players } = props;

  return (
    <>
      <div>
        <div>
          <p>
            <strong>Player 1</strong>: {players.p1}
          </p>
          <p>
            <strong>Player 2</strong>: {players.p2}
          </p>
          <p>
            <strong>Current turn</strong>:{" "}
            {players.turn === "p1" ? "Player 1" : "Player 2"}
          </p>
        </div>
      </div>
      <GameBoardStyled>
        {board.map((symbol, i) => (
          <Square key={i} index={i} symbol={symbol} />
        ))}
      </GameBoardStyled>
    </>
  );
};

export default connect(({ board, players }) => ({ board, players }))(GameBoard);
