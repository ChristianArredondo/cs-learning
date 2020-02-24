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
var levelOrder = function (root) {
  if (!root) return [];

  const treeLevels = [];
  const traverseNodes = (nodes) => {
    if (!nodes || !nodes.length) return;

    const valsAtThisLevel = [];
    const nodesForNextLevel = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      valsAtThisLevel.push(node.val);
      if (node.left) nodesForNextLevel.push(node.left);
      if (node.right) nodesForNextLevel.push(node.right);
    }
    treeLevels.push(valsAtThisLevel);
    traverseNodes(nodesForNextLevel);
  };

  traverseNodes([root]);

  return treeLevels;
};