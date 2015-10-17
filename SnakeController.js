/*
Erik Kaasila 10-17-2015
This represents the snake and contains all operators to be used with it.
*/

// The dimensions of the grid
var width = 20;
var height = 20;

// The board, or grid, is represented with a 2D (see Jagged) array of integers.
var gameBoard = [];

// Initilize the gameBoard
for(var x = 0; x < width; ++x) {
  gameBoard[x] = [];
  for (var y = 0; y < height; ++y) {
    gameBoard[x][y] = -1;
  }
}
