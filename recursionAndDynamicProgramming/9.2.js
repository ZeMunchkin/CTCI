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
  let counter = 0;

  const findPaths = (xIndex, yIndex) => {
    if (xIndex === x - 1 && yIndex === y - 1) {
      counter += 1;
      return;
    }

    if (xIndex > x || yIndex > y) {
      return;
    }

    findPaths(xIndex + 1, yIndex);
    findPaths(xIndex, yIndex + 1);
  };

  findPaths(0, 0);

  return counter;
};
