function Log({turns}) {
	return (
		<>
			<ul id="log">
				{turns.length > 0 &&
					turns.map((turn) => (
						<li key={`${turn.cell.row}}${turn.cell.col}`}>
							Player {turn.player} : {turn.cell.row} - {turn.cell.col}
						</li>
					))}
			</ul>
		</>
	);
}

export default Log;
