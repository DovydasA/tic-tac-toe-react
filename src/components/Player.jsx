import {useState} from "react";

function Player({name, symbol, isActive}) {
	const [playerName, setPlayerName] = useState(name);
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing((prev) => !prev);
	};

	const handleInput = (e) => {
		const {value} = e.target;
		setPlayerName(value);
	};

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={playerName}
						onChange={handleInput}
						required
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

export default Player;
