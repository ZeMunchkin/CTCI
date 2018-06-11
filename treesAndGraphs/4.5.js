/*
 * Implement a function to check if a binary tree is a binary search tree.
*/

const isBST = (tree) => {

  const compareTree = (node, parentVal, greaterThanParent) => {
    let left = true;
    let right = true;

    if (node.left) {
      if (node.left.value > node.value) {
        return false;
      } else if (greaterThanParent && node.left.value < parentVal) {
        return false;
      } else {
        left = compareTree(node.left, node.value, false);
      }
    }

    if (node.right) {
      if (node.right.value < node.value) {
        return false;
      } else if (!greaterThanParent && node.right.value > parentVal) {
        return false;
      } else {
        right = compareTree(node.right, node.value, true);
      }
    }
    if (!right || !left) {
      return false;
    }
    return true;
  };

  let leftBranch = true;
  let rightBranch = true;


  if (tree.left) {
    leftBranch = comparTree(tree.left, tree.value, false);
  }
  if (tree.right) {
    rightBranch = comparTree(tree.right, tree.value, true);
  }

  if (!rightBranch || !leftBranch) {
    return false;
  }
  return true;
};

/*
 * Notes from Solution:
 *
 * There are two ways to approach this
 *   - Do an in order traversal, and see if the values are sorted
 *   - Check if each value falls within the specified min/max range
 *
 * Downside to  in-order traversal is that it takes up additional
 * memory space (an array) and it cannot tell the difference between
 * the order of duplicated numbers (if the number is equal to the
 * parent node, it goes to the left, not the right). This works if
 * there are no space constraints and no duplicates.
 *
 *
*/

