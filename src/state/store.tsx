import React, { createContext, useState } from "react";

export enum Players {
  Cross = 1,
  Circle
}

export const StoreContext = createContext<any>(null);

export default ({ children }: { children: JSX.Element }) => {
  const boardSize = 9;

  const [board, setBoard] = useState([...Array(boardSize).fill(null)]);
  const [player, setPlayer] = useState(Players.Cross);
  const [moves, setMoves] = useState(0);
  const [moveLimit, setMovelimit] = useState(boardSize);
  const [winner, setWinner] = useState("");

  document.body.style.setProperty("--board-size", `${Math.sqrt(boardSize)}`);

  const store = {
    board,
    setBoard,
    player,
    setPlayer,
    moves,
    setMoves,
    winner,
    setWinner,
    moveLimit
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
