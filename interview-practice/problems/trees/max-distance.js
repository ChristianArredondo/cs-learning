
function TreeNode(val) {
  this.val = val;
  this.children = [];
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.children = [];
 * }
 */
/**
 * @param {TreeNode} t1
 * @return {Number}
 */
var maxTreeDistance = function (node) {

  if (!node.children || !node.children.length) return 0;

  const { max, secondMax } = node.children.reduce((memo, child) => {
    const childDistance = maxTreeDistance(child);
    if (childDistance > memo.max) {
      memo.secondMax = memo.max;
      memo.max = childDistance;
    } else if (childDistance > memo.secondMax) {
      memo.secondMax = childDistance;
    }
    return memo;
  }, { max: 0, secondMax: 0 });

  if (!max && !secondMax) {
    return node.children.length > 1 ? 2 : 1;
  }

  return max + secondMax + 1;
};