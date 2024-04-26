import {useState} from "react";
import Cell from "./Cell";

const initGameGrid = new Array(3).fill(new Array(3).fill(null));

function GameBoard({player, onChangeTurn}) {
	const [gameBoard, setGameBoard] = useState(initGameGrid);

	const handleCellClick = (row, col) => {
		setGameBoard((prev) => {
			const updatedGameBoard = [...prev.map((innerArray) => [...innerArray])];
			updatedGameBoard[row][col] = player;
			return updatedGameBoard;
		});
		onChangeTurn();
	};

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<Cell onClick={() => handleCellClick(rowIndex, colIndex)}>
									{playerSymbol}
								</Cell>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

export default GameBoard;
