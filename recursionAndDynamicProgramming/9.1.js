/*
 * A child is running up a staircase with n steps, and can
 * hop either 1 step, 2 steps, or steps at a time. Implement
 * a method to count how many possible ways the child can run
 * up the stairs.
*/

const waysToClimbStairs = (numStairs) => {
  let counter = 0;
  if (numStairs === 0) {
    return 0;
  }
  const hopOptions = [1, 2, 3];
  const countHops = (stairsRemaining) => {
    if (stairsRemaining === 0) {
      counter += 1;
      return;
    }

    for (let i = 0; i < hopOptions.length; i += 1) {
      const hop = hopOptions[i];
      if (stairsRemaining - hop < 0) {
        continue;
      }
      countHops(stairsRemaining - hop);
    }
  };
  countHops(numStairs);
  return counter;
};

