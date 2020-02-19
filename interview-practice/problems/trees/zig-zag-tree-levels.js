/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const nodeVals = [];

  if (!root) return nodeVals;

  function zigzag(upperNodes, dir) {
    if (!upperNodes.length) return;
    const upperVals = [];
    const localNodes = [];
    if (dir === 'left') {
      // iterate right-to-left
      for (let i = upperNodes.length - 1; i >= 0; i--) {
        const upperNode = upperNodes[i];
        upperVals.push(upperNode.val);
        if (upperNode.right) {
          localNodes.unshift(upperNode.right);
        }
        if (upperNode.left) {
          localNodes.unshift(upperNode.left);
        }
      }
    } else if (dir === 'right') {
      // iterate left-to-right
      for (let i = 0; i < upperNodes.length; i++) {
        const upperNode = upperNodes[i];
        upperVals.push(upperNode.val);
        if (upperNode.left) {
          localNodes.push(upperNode.left);
        }
        if (upperNode.right) {
          localNodes.push(upperNode.right);
        }
      }
    }
    nodeVals.push(upperVals);
    zigzag(localNodes, dir === 'left' ? 'right' : 'left');
  }

  // init root
  nodeVals.push([root.val]);
  const rootChildren = [];
  if (root.left) rootChildren.push(root.left);
  if (root.right) rootChildren.push(root.right);
  zigzag(rootChildren, 'left');

  // return finalVals
  return nodeVals;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(node));