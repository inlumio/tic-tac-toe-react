export default function MoveCheck({ description, goToMove }) {
	return (
		<button className='move' onClick={goToMove}>
			{description}
		</button>
	);
}
