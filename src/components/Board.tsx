import React, { useEffect, useContext } from "react";

import "./Board.css";

import { StoreContext } from "../state/store";
import { checkDynamicBoard } from "../utils/checkBoard";

const Board = () => {
  const {
    board,
    setBoard,
    moves,
    setMoves,
    player,
    setPlayer,
    winner,
    setWinner,
    moveLimit
  } = useContext(StoreContext);

  useEffect(() => {
    if (checkDynamicBoard(board))
      setWinner(checkDynamicBoard(board) === 1 ? "Player 1" : "Player 2");
  }, [board, setWinner]);

  const handleClick = (index: number) => {
    if (winner) return;
    if (moves === moveLimit) return;
    if (board[index]) return;

    const tempBoard = [...board];
    tempBoard[index] = player;
    setBoard(tempBoard);

    setPlayer(player === 1 ? 2 : 1);
    setMoves((prevState: any) => prevState + 1);
  };

  return (
    <div>
      <div className="board-container">
        {board.map((cell: any, index: number) => (
          <div
            key={index}
            className="board-cell"
            onClick={() => handleClick(index)}
          >
            {board[index] === 1 ? "x" : board[index] === 2 ? "o" : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
