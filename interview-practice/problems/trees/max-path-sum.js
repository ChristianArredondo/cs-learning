function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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
var maxPathSum = function (root) {
  if (!root) return 0;

  let maxSum = -Infinity;

  const traverse = (node) => {
    if (!node) return 0;
    const leftSum = traverse(node.left);
    const rightSum = traverse(node.right);
    const nodeMax = Math.max(
      node.val,
      node.val + leftSum,
      node.val + rightSum,
      node.val + leftSum + rightSum
    );
    maxSum = Math.max(maxSum, nodeMax);

    return Math.max(node.val, node.val + leftSum, node.val + rightSum);
  };

  traverse(root);
  return maxSum;
};