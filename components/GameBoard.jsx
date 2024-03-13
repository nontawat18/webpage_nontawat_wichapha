import * as React from "react";


function GameBoard({ board, handleMove }) {
  const [activeSquares, setActiveSquares] = React.useState(Array(9).fill(false));

  const handleClick = (index) => {
    handleMove(index); // Call the parent handleMove function
    // Toggle the active state of the clicked square
    const newActiveSquares = [...activeSquares];
    newActiveSquares[index] = true;
    setActiveSquares(newActiveSquares);
  };

  return (
    <div className="game-board">
      {board.map((value, index) => (
        <div
          key={index}
          className={`square ${activeSquares[index] ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
