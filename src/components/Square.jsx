export default function Square({ value, onSquareClick }) {
	return (
		<button
			className={`square ${!value ? '' : value === 'X' ? 'blue' : 'yellow'}`}
			onClick={onSquareClick}>
			{value}
		</button>
	);
}
