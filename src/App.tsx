import React, { useContext } from "react";

import "./App.css";

import { StoreContext } from "./state/store";

import Board from "./components/Board";

const App = () => {
  const {
    setBoard,
    moves,
    setMoves,
    player,
    setPlayer,
    winner,
    setWinner,
    moveLimit
  } = useContext(StoreContext);

  const handleRestart = () => {
    setBoard([...Array(moveLimit).fill(null)]);
    setPlayer(player === 1 ? 2 : 1);
    setMoves(0);
    setWinner("");
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h3>The winner is {winner}</h3>
      ) : moves === moveLimit ? (
        <h3>Draw</h3>
      ) : (
        <h3>Player {player} turn.</h3>
      )}
      <p>Moves: {moves}</p>
      <button onClick={handleRestart}>Restart</button>
      <Board />
    </div>
  );
};

export default App;
