import {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import checkWin from "./utils/checkWin";

const initGameGrid = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const deriveActivePlayer = (turns) => {
	return turns.length > 0 && turns[0].player === "X" ? "O" : "X";
};

function App() {
	//const [activePlayer, setActivePlayer] = useState("X");
	const [gameTurns, setGameTurns] = useState("");

	const activePlayer = deriveActivePlayer(gameTurns);

	let gameBoard = initGameGrid;

	for (const turn of gameTurns) {
		const {
			cell: {row, col},
			player,
		} = turn;
		gameBoard[row][col] = player;
	}

	let winner = gameTurns.length > 0 && checkWin(gameBoard, gameTurns[0]);

	const handleChangeTurn = (rowIndex, colIndex) => {
		//setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			return [
				{
					cell: {
						row: rowIndex,
						col: colIndex,
					},
					player: currentPlayer,
				},
				...prevTurns,
			];
		});
	};
	return (
		<>
			<main id="game-container">
				<ol
					id="players"
					className="highlight-player">
					<Player
						name="Player 1"
						symbol="X"
						isActive={activePlayer === "X"}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
				{winner && <p>You WON, {winner}</p>}
				<GameBoard
					board={gameBoard}
					onChangeTurn={handleChangeTurn}
				/>
			</main>
			<Log turns={gameTurns} />
		</>
	);
}

export default App;
