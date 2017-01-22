/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
function horizontal(board){
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			if(board[i][j] === board[i][j+1] && board[i][j] ===board[i][j+2]){
				return board[i][j]
			}
	}
}

function vertical(board){
	for (var i= 0; < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]){
				return board[i][j]
			}
	}
}

function majorHorizontal (board){
	for (var i= 0; < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			if(board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2]){
				return board[i][j]
			}
	}
}

}

function minorHorizontal (board){
	for (var i = board.length-1; i >= 0; i--) {
		for (var j = board[i].length-1; j >= 0 ; j--) {
			if(board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2]){
				return board[i][j]
			}
	}
}
}
//count instance after function invokations of each X,O, and 0 to return desired outcomes.
function ticTacToe(board){
	var countX = 0;
	var countO = 0;
	var count0 = 0;



}

// function ticTacToe(board){
// 	var countX = 0;
// 	var countO = 0;
// 	var count0 = 0
// 	//check for any wins or unfinished board
// 	var hasConflict = function(board){
// 		for(var i = 0; i < board.length; i++){
// 			for(var j = 0; i < board[i].length; i++){
// 				if(board[i][j].indexOf(1) > 0){
// 					countX ++
// 				}
// 				if(board[i][j].indexOf(2) > 0){
// 					countO ++
// 				}
// 				if(board[i][j].indexOf(0) > 0){
// 					count0 ++
// 				}
// 			if(count0 === countX){
// 				return 0;
// 			}
// 			}else if(countO>3){
// 				return 2; 
// 			}else if (count0 > 3){
// 				return -1;
// 			}else (countX > 3){
// 				return 1;
// 			}
// 	}
	
// };

//timecomplexity : quadratic
