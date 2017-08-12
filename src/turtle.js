
// Project: Conway's Game of Life
// Author: Colin Van Sickle
/* ----------------------------
THE RULES
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.
---------------------------- */
// use a node controller to send data to the front-end
// modular programming
var Turtle = require('turtle-canvas');
var turtle = new Turtle("html-canvas");
turtle.forward(10);
turtle.stroke();


"use strict";
// export JavaScriptAudition
// JavaScriptAuditions.itRuns()

var JavaScriptAudition = {
  itRuns: function() {
    return true;
  }


  // step I: draw one square in the given color at the given position
  // function drawSquare

  // step II: draw an empty grid using turtle graphics
  // function drawGrid(rows, columns, tortoise)
  
  // step III: create square shapes to represent cells  
  // function createSquares(screen, colors)

  // step IV: create a rows x columns grid of zeros
  // function emptyGrid(rows, columns)

  // step V: set a given list of coordinates from 0 to 1 in the grid and draw them as black squares
  // function initialize(grid, rows, columns, tortoise)

  // step VI: finds the number of live neighbors of the cell in the given row and column
  // function neighborhood(grid, row, column)

  // step VII: create the game of life for the given number of generations, starting with coordinates from those from step VI
  // function life(rows, columns, generations, initialCells, tolerance, tortoise)

};



 