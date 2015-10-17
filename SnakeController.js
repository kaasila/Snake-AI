/*
Erik Kaasila 10-17-2015
This represents the snake and contains all operators to be used with it.
*/

// The dimensions of the grid
var width = 20;
var height = 20;

// The board, or grid, is represented with a 2D (see Jagged) array of integers.
var gameBoard = [];
var snake = [];

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
function placeFood() {
  var xPos = Math.floor(Math.random() * width);
  var yPos = Math.floor(Math.random() * height);
  if (!containsEntity(xPos, yPos)) {
    gameBoard[xPos][yPos] = 1;
  }
}

// Places the initial snake on a random position in the game board
function placeSnake() {
  var xPos = Math.floor(Math.random() * width);
  var yPos = Math.floor(Math.random() * height);
  if (!containsEntity(xPos, yPos)) {
    snake[0] = {x: xPos, y:yPos, direction:1};
    gameBoard[xPos][yPos] = 0;
  }
}

// Returns whether a given x,y coordinate contains the snake
function containsEntity(x, y) {
  return gameBoard[x][y] !== -1;
}

// Moves the snake
function moveSnake() {
  var newSnake = [];
  for(var i = 0; i < snake.length; ++i) {
    if (i = snake.length - 1) {
      gameBoard[snake[i].x][snake[i].y] = 0;
    }
    var snakePiece;
    if (i === 0) {
      snakePiece = snake[i];
    } else {
      snakePiece = {x: snake[i].x, y: snake[i].y, direction: snake[i-1].direction};
    }
    switch(snake[i].direction) {
      // Moving UP
      case 1:
        newSnake[i] = {x: snakePiece.x, y: snakePiece.y + 1, direction: snakePiece.direction};
        break;
      // Moving DOWN
      case 2:
        newSnake[i] = {x: snakePiece.x, y: snakePiece.y - 1, direction: snakePiece.direction};
        break;
      // Moving LEFT
      case 3:
        newSnake[i] = {x: snakePiece.x - 1, y: snakePiece.y, direction: snakePiece.direction};
        break;
      // Moving RIGHT
      case 4:
        newSnake[i] = {x: snakePiece.x + 1, y: snakePiece.y, direction: snakePiece.direction};
        break;
    }
  }
  snake = newSnake;
  updateGameBoard();
}

// Updates the game board model
function updateGameBoard() {
  for (var i = 0; i < snake.length; ++i) {
    eatFood(snake[i].x, snake[i].y);
    gameBoard[snake[i].x][snake[i].y] = 0;
  }
}

// Eats the food, spawns a new one, and grows the snake
function eatFood(x, y) {
  if (gameBoard[x][y] === 1) {
      gameBoard[x][y] = 0;
      placeFood();
      growSnake();
  }
}

// Increases snake length by one
function growSnake() {
  switch(snake[snake.length - 1].direction) {
    // Moving UP
    case 1:
      snake[snake.length] = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y - 1, direction: snake[snake.length - 1].direction};
      break;
    // Moving DOWN
    case 2:
      snake[snake.length] = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y + 1, direction: snake[snake.length - 1].direction};
      break;
    // Moving LEFT
    case 3:
      snake[snake.length] = {x: snake[snake.length - 1].x + 1, y: snake[snake.length - 1].y, direction: snake[snake.length - 1].direction};
      break;
    // Moving RIGHT
    case 4:
      snake[snake.length] = {x: snake[snake.length - 1].x - 1, y: snake[snake.length - 1].y, direction: snake[snake.length - 1].direction};
      break;
  }
}
