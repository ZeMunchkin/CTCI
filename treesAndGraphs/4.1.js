/*
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined
 * to be a tree such that the heights of the two subtrees of
 * any node never differ by more than one.
*/

const getMaxDepth = (tree) => {
  let maxDepth = 0;
  let curDepth = 0;

  const findDepth = (node) => {
    curDepth += 1;
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
      }
      curDepth -= 1;
    }
    if (node.left) {
      findDepth(node.left);
    }
    if (node.right) {
      findDepth(node.right);
    }
  };

  findDepth(tree);
  return maxDepth;
};

const isBalanced = (tree) => {
  const leftDepth = getMaxDepth(tree.left);
  const rightDepth = getMaxDepth(tree.right);

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }

  const leftBalanced = isBalanced(tree.left);
  const rightBalanced = isBalanced(tree.right);

  return leftBalanced && rightBalanced;
};


/*
 * Notes from Solution:
 *
 *
*/

