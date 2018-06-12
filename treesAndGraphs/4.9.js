/*
 * You are given a binary tree in which each node contains a value.
 * Design an algorithm to print all paths which sum to a given value.
 * The path does not need to start or end at the root or leaf, but
 * it must go in a straight line down.
*/



const findPathsToTotal = (tree, value) => {

  const paths = [];
  const depthValues = {};

  const findPaths = (node, curTotal, depth, curPath) => {
    curTotal += node.value;
    curPath.push(node);
    depthValues[depth] = node.value;

    if (curTotal >= value) {
      let workingTotal = 0;
      for (let i = curPath.length - 1; i >= 0; i -= 1) {
        workingTotal += depthValues[i];

        if (workingTotal === value) {
          paths.push(curPath.slice(i));
          break;
        }
        if (workingTotal > value) {
          break;
        }
      }
    }

    if (node.left) {
      findPaths(node.left, curTotal, depth + 1, curPath);
    }
    if (node.right) {
      findPaths(node.right, curTotal, depth + 1, curPath);
    }

    curPath.pop();
  };

  findPaths(tree, 0, 0, []);
  return paths;
};

/*
 * Notes from Solution:
 *
 * Make sure to account for negative numbers in the path! The path
 * doesn't necessarilly stop just because you're over the total.
 *
*/

