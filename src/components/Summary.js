import React from "react";
import { connect } from "react-redux";
import { checkResult } from "../actions/resultsAction";

const Summary = (props) => {
  const { board, players, result, checkResult } = props;

  if (!(result.win || result.tie)) checkResult(board);

  if (result.win === "X") {
    const player = players.p1 === "X" ? "Player 1" : "Player 2";
    return <div>`${player} is the winner`</div>;
  } else if (result.win === "O") {
    const player = players.p1 === "X" ? "Player 1" : "Player 2";
    return <div>`${player} is the winner`</div>;
  } else if (result.tie) {
    return <div>`It's a DRAW`</div>;
  }

  return (
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
  );
};

export default connect(
  ({ board, players, result }) => ({ board, players, result }),
  (dispatch) => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Summary);
