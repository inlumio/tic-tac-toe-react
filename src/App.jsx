import { useState } from 'react';
import './App.css';
import calculateWinner from './calculateWinner';
import Board from './components/Board';
import Status from './components/Status';
import MoveCheck from './components/MoveCheck';

function App() {
	const [history, setHistory] = useState([
		{
			player: 'X',
			squares: Array(9).fill(null),
			isOver: false,
			winner: null,
		},
	]);
	const [currentMove, setCurrentMove] = useState(0);
	const { squares, player, isOver, winner } = history.at(currentMove);

	const handlePlay = (newSquares) => {
		if (isOver) return;
		let status = calculateWinner(newSquares);
		setHistory([
			...history.slice(0, currentMove + 1),
			{
				player: player === 'X' ? 'O' : 'X',
				squares: newSquares,
				isOver: status.isOver,
				winner: status.winner,
			},
		]);
		setCurrentMove(currentMove + 1);
	};

	return (
		<>
			<section className='game'>
				<Status
					message={
						!isOver
							? `Next player : ${player}`
							: !winner
							? 'Draw'
							: `Winner : ${winner}`
					}
				/>
				<Board squares={squares} onPlay={handlePlay} player={player} />
				<div className='moves'>
					{history.map((record, index) => {
						const desc =
							index === 0 ? 'Go to game start' : `Go to move #${index}`;
						return (
							<MoveCheck
								key={index}
								description={desc}
								goToMove={() => {
									setCurrentMove(index);
								}}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default App;
