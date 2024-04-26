import {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
	const [activePlayer, setActivePlayer] = useState("X");
	return (
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
			<GameBoard
				player={activePlayer}
				onChangeTurn={() => setActivePlayer((prev) => (prev === "X" ? "O" : "X"))}
			/>
		</main>
	);
}

export default App;
