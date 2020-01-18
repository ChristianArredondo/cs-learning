
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  if (!root || root.val === null) {
    return false;
  }
  const getValIfInRange = node => {
    if (!node || node.val === null) {
      return 0;
    }

    const val = node.val >= L && node.val <= R ? node.val : 0;
    return val + getValIfInRange(node.left) + getValIfInRange(node.right);
  };

  return getValIfInRange(root);
};

const testNode1 = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      left: null,
      right: null
    }
  }
};

console.log(rangeSumBST(testNode1, 7, 15));