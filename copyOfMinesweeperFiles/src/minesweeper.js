class Game {
	constructor (numberOfRows, numberOfColumns, numberOfBombs) {
			this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	};
	
	playmove(rowIndex, columnIndex) {
		
		this._board.flipTile(rowIndex, columnIndex);
		if (this._board.playerBoard[rowIndex][columnIndex] === 'B'){
			console.log('Game over');
			this._board.print();
			
		}
		else if (!this._board.hasSafeTiles()) {
		//else if (this._board.hasSafeTiles === false) {
			console.log('Well done , you won');
			
			
		//		
		}
		else {
		console.log('Current Board');
		this._board.print();			
		};
	};
	
	
};




class Board {
	
	constructor (numberOfRows, numberOfColumns, numberOfBombs){
	this._numberofBombs = numberOfBombs;
	this._numberofTiles = numberOfRows + numberOfColumns;
	//this._playerBoard = generatePlayerBoard(numberofRows, numberOfColumns);
	this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
	this._bombBoard = Board.generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs);
	};
	
	get playerBoard() {
		return this._playerBoard;
	};
	
	flipTile(rowIndex, columnIndex) {
	if (this._playerBoard[rowIndex][columnIndex] != ' '){
		console.log('This tile has already been flipped');
		return;
	}
	else if (this._bombBoard[rowIndex][columnIndex] === 'B')
	{
		this._playerBoard[rowIndex][columnIndex] = 'B';
		console.log('This tile has hit x');
	}
	else this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
	//console.log ("NB is" + getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex));
	//console.log('Tile flipped');
	this._numberOfTiles--;
};
	
	
	getNumberOfNeighborBombs(rowIndex, columnIndex) {
	
	//console.log('in the getNeighbourHood bombs number');
	let numberOfRows = this._bombBoard.length;
	let numberOfColumns = this._bombBoard[0].length;
	let numberOfBombs = 0;
	
	let neighborOffsets = [
	[-1,-1],
	[-1,0],
	[-1,1],
	[0,-1],
	[0,1],
	[1,-1],
	[1,0],
	[1,1]];
		
	
	neighborOffsets.forEach(offset => {
		
		let neighbourRowIndex = rowIndex + offset[0];
		let neighbourColumnIndex = columnIndex + offset[1];
		
		if (neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns ) 	{	
			if (this._bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B') {
			numberOfBombs++;
			}
		
	//console.log('forEaching');	
		
	};

	
	});
	
	//console.log("adj bomb number is "  + numberOfBombs);
	return numberOfBombs;
	
};

	
	hasSafeTiles(){
		return this._numberofTiles !== this.numberOfBombs;
	};
	
	
	print() {
	console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));

};
	
	static generatePlayerBoard(numberOfRows, numberOfColumns) {

const board = [];
	for (let r = 0; r < numberOfRows; r++)
	{
	const row = [];	
		for (let c = 0; c < numberOfColumns; c++) 
		{
		row.push(' ');	
		}
	board.push(row);
	}
return board;
}
	
	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
	
const board = [];
	for (let r = 0; r < numberOfRows; r++)
	{
	const row = [];	
		for (let c = 0; c < numberOfColumns; c++) 
		{
		row.push(null);
		}
	board.push(row);
	};

let numberOfBombsPlaced = 0;

	while (numberOfBombsPlaced < numberOfBombs)
	{
	
	 let randomRowIndex = Math.floor(Math.random() * numberOfRows);
	 let randomColIndex = Math.floor(Math.random() * numberOfColumns);
	 if (board[randomRowIndex][randomColIndex]!== 'B')
	 {
	 board[randomRowIndex][randomColIndex]='B';
	 numberOfBombsPlaced++;
	 }
	 
	}


return board;
};	
	
	
	
};








const g = new Game (3,3,3);
g.playmove(0,0);




	
	


