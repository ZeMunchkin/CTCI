/*
 * Imagine a robot sitting on the upper left corner of an X by Y
 * grid. The robot can only move in two directions, right and
 * down. How many possible paths are there for the robot to go
 * from (0, 0) to (X, Y)?
 *
 * FOLLOW UP
 * Imagine certain spots are "off limits," such that the robot
 * cannot step on them. Design an algorithm to find a path for
 * robot from the top left to the bottom right.
*/

const findNumPaths = (x, y) => {
  if ()
};

class RobotBoard {
  constructor(x, y) {
    for (let i = 0; i < x; i += 1) {
      this[i] = new Array(y).fill(false);
    }
    this[0][0] = true;
  }

  togglePiece(x, y) {
    this[x][y] = !this[x][y];
  }
};