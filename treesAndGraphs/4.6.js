/*
 * Write an algorithm to find the 'next' node (ie: in order
 * successor) of a given node in a binary search tree. You
 * may assume that each node has a link to its parent.
*/

const nextNode = (node) => {
  if (node.right) {
    let curNode = node.right;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode;

  } else {
    let curNode = node;
    let curParent = node.parent;
    while (curParent.right === curNode) {
      curNode = curParent;
      curParent = curNode.parent;
    }
    return curParent;
  }
};

