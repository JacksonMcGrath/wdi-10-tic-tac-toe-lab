let $clearBoard = $('#clear-board')

$clearBoard.on('click', () => {
	console.log('clearBoard is firing');
})

let $board = $('#board')

const generateSquares = () => {
	for (i = 0; i < 9; i++) {
		let $newSquare = $('<div>').addClass('square');
		$board.append($newSquare);		
	}
}

generateSquares();