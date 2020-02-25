/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  let totalNodes = 0;
  const countNodes = node => {
    if (!node) return;
    totalNodes++;
    countNodes(node.left);
    countNodes(node.right);
  };

  countNodes(root);

  return totalNodes;
};