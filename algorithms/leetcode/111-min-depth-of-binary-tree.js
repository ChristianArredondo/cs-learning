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
var minDepth = function (root) {
  if (!root) return 0;
  let min = Number.MAX_SAFE_INTEGER;

  const traverse = (node, depth) => {
    if (!node || depth >= min) return;

    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    } else {
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };

  traverse(root, 1);

  return min;
};