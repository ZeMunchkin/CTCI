/*
 * Design an algorithm and write code to find the first common
 * ancestor of two nodes in a binary tree. Avoid storing additional
 * nodes in a data structure. NOTE: This is not necessarilly a
 * binary search tree.
*/


/*
 * Questions I have as I begin:
 * - Do the nodes have access to their parent node?
 * - Do I have access to the root of the tree (is this a
 *   method of the binary tree)?
*/

// Working on the assumption that the nodes have access to their
// parent nodes

const commonAncestor = (node1, node2) => {
  let node1Parent = node1;
  let node2Parent = node2;

  while (node1Parent !== node2Parent) {
    if (node2Parent.parent) {
      node2Parent = node2Parent.parent;
    } else if (node1Parent.parent) {
      node1Parent = node1Parent.parent;
      node2Parent = node2;
    } else {
      return null;
    }
  }
  return node1Parent;
};

/*
 * Notes from Solution:
 *
 * Without access to parents, you want to start at the root node
 * of the tree and see which side branch has each node. If they are
 * on the same branch, follow the same process on that branch. Once
 * they are on separate branches, you've found the ancestor.
*/
