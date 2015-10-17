/*
Erik Kaasila 10-17-2015
This represents the snake and contains all operators to be used with it.
*/

// The dimensions of the grid
var width = 20;
var height = 20;

// The board, or grid, is represented with a 2D (see Jagged) array of integers.
var gameBoard = [];

// Starts the snake game with the given width and height.
function startGame(width, height) {
  // Clear the array
  gameBoard  = [];
  // Initilize the gameBoard
  for(var x = 0; x < width; ++x) {
    gameBoard[x] = [];
    for (var y = 0; y < height; ++y) {
      gameBoard[x][y] = -1;
    }
  }
  // Place the first food
  placeFood();
  // Place the first snake
  placeSnake();
}

// Places a food on a random position in the game board
function placeFood() = {
  var xPos = Math.floor(Math.random() * width);
  var yPos = Math.floor(Math.random() * height);
  if (!containsSnake(xPos, yPos)) {
    gameBoard[xPos][yPos] = 1;
  }
}

// Places the initial snake on a random position in the game board
function placeSnake() {
  var xPos = Math.floor(Math.random() * width);
  var yPos = Math.floor(Math.random() * height);
  if (!containsEntity(xPos, yPos)) {
    gameBoard[xPos][yPos] = 0;
  }
}

// Returns whether a given x,y coordinate contains the snake
function containsEntity(x, y) {
  return gameBoard[x][y] !== -1;
}
