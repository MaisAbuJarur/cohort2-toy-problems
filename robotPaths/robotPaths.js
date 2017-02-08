/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
<<<<<<< HEAD
  board.makePath = function(){

  }
=======
>>>>>>> 551c0ed41d181ca0915bb8fe20dd8ced3bdec13b
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths
<<<<<<< HEAD
 var myBoard = makeBoard(5);

var robotPaths = function(myBoard) {
 var counter = 0;
//make a way to make a path for the robot while using togglePiece where you change the value of i and j
//set up a counter for each path created
//
myBoard.togglePiece(0,0)
for (var i = 0; i < myBoard.length; i++) {
 for (var j = 0; j < myBoard[i].length; j++) {
   if(myBoard.hasBeenVisited(i,j)){
    myBoard.togglePiece(i+1,j+1)
    if(myBoard.hasBeenVisited(4,4)){
      counter ++
    }
  }
}
}

return counter;
}

 //time-complexity exponential     
=======

var robotPaths = function(myBoard) {
 
}

      
>>>>>>> 551c0ed41d181ca0915bb8fe20dd8ced3bdec13b










