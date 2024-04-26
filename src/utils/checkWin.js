const checkWin = (board, turn) => {
    const {
					cell: {row, col},
					player,
				} = turn;

				if (
					board[row][0] === player &&
					board[row][1] === player &&
					board[row][2] === player
				)
					return player;
				if (
					board[0][col] === player &&
					board[1][col] === player &&
					board[2][col] === player
				)
					return player;
				if (
					(board[0][0] === player &&
						board[1][1] === player &&
						board[2][2] === player) ||
					(board[2][0] === player &&
						board[1][1] === player &&
						board[0][2] === player)
				)
					return player;
				return null;
};

export default checkWin;
