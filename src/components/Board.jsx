import Square from './Square';

export default function Board({ squares, onPlay, player }) {
	const handleClick = (index) => {
		if (squares[index]) return;
		const newSquares = squares.map((square, i) =>
			i === index ? player : square
		);
		onPlay(newSquares);
	};

	return (
		<div className='board'>
			{squares.map((square, i) => (
				<Square key={i} value={square} onSquareClick={() => handleClick(i)} />
			))}
		</div>
	);
}
