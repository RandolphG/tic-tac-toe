import React, { useState, useEffect } from "react";
import { Tiles } from "./Tiles";
import {
  BoardStyled,
  Holder,
  JoinButton,
  Row,
  StatusBar,
} from "../GlobalStyles";
import { joinGame } from "../utils/game-client";

export const Board = () => {
  useEffect(() => {});

  const [name, setName] = React.useState(null);
  const [id, setId] = React.useState(0);
  const [joined, setJoined] = React.useState(false);
  const [players, setPlayers] = React.useState(null);
  const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  /**
   *
   * @param type
   * @param payload
   */
  const callback = ({ type, payload }) => {
    console.log("type", type);
    if (type === "self") {
      setId(payload);
      setJoined(true);
    } else if (type === "list") {
      setPlayers(payload);
    }
  };

  /**
   * handle click events
   * @param index
   */
  const handClick = (index) => {
    // copy the board squares
    const square = [...boardSquare];
    //if the index of board is filled return
    if (calculateWinner(boardSquare) || square[index]) {
      return;
    }
    //add X or O
    square[index] = xNext ? "X" : "O";
    // calculate the next turn
    // set teh state of the board
    setBoardSquare(square);
    setXNext(!xNext);
  };

  const reset = (index) => {
    const square = [...boardSquare];
    for (let i = 0; i < boardSquare.length - 1; i++) {
      square[index] = "";
      // console.log("nothing");
    }
  };

  /**
   * create a render of tiles
   * @param index
   * @returns {*}
   */
  const renderSquare = (index) => {
    return (
      <Tiles
        index={index}
        value={boardSquare[index]}
        onClick={() => handClick(index)}
      />
    );
  };

  /**
   * returns a function
   */
  const handleJoin = () => joinGame(name, callback);

  //Initialize status
  let status;
  const winner = calculateWinner(boardSquare);
  status = winner ? `Winner is: ${winner}` : `Next Player ${xNext ? "X" : "O"}`;

  return (
    <BoardStyled>
      <StatusBar>{status}</StatusBar>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        disabled={joined}
      />
      {joined && <label>your id: {id}</label>}
      <Holder>
        <Row>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </Row>
        <Row>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </Row>
        <Row>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Row>
      </Holder>
      <JoinButton disabled={joined} onClick={handleJoin}>
        Join
      </JoinButton>{" "}
      <JoinButton onClick={() => reset()}>RESET</JoinButton>
    </BoardStyled>
  );
};

/**
 * calculate the winner
 * @param squares
 */
const calculateWinner = (squares) => {
  // get the set of winning lines
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // loop through the set
  for (let i = 0; i < winningCombo.length; i++) {
    // see if ther eis a winning value
    const [a, b, c] = winningCombo[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
    //else return nothing
  }
  return null;
};
