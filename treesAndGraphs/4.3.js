/*
 * Given a sorted (increasing order) array with unique elements,
 * write an algorithm to create a binary search tree with minimal
 * height.
*/

const BinarySearchTree = require('./binarySearchTree.js');

const transformArrayToTree = (sortedArr) => {

  const middle = Math.floor(sortedArr.length / 2);
  const tree = new BinarySearchTree(sortedArr[middle]);

  const remaining = [];
  remaining.push(sortedArr.slice(0, middle));
  remaining.push(sortedArr.slice(middle + 1));

  const addMiddle = (arrayList) => {
    if (arrayList[0].length === 0) {
      return;
    }

    const remainingArrays = [];
    for (let i = 0; i < arrayList.length; i += 1) {
      const curArray = arrayList[i];
      const mid = Math.floor(curArray.length / 2);
      tree.addToTree(curArray[mid]);

      remainingArrays.push(curArray.slice(0, mid));
      remainingArrays.push(curArray.slice(mid + 1));
    }

    addMiddle(remainingArrays);
  };

  addMiddle(remaining);
  return tree;
};
