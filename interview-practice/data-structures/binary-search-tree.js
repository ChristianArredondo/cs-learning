
class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }

    const newNode = new TreeNode(value);
    let current = this.root;
    while (true) {
      if (value === current.value) break;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }

  }

  lookup(value) {
    if (!this.root) {
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) return current;
      if (value < current.value) {
        if (!current.left) return;
        current = current.left;
      } else {
        if (!current.right) return;
        current = current.right;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    if (value === this.root.value) {
      this.root = null;
      return true;
    }
    const targetParent = this._getParent(value);
    if (!targetParent) {
      return null;
    }

    let target = null;
    let isLeftOfTargetParent = false;
    let isRightOfTargetParent = false;
    if (targetParent.left && targetParent.left.value === value) {
      target = targetParent.left;
      isLeftOfTargetParent = true;
    } else {
      target = targetParent.right;
      isRightOfTargetParent = true;
    }
    let successor = null;
    let successorParent = target;
    if (target.right) {
      successor = target.right;
      // traverse to lowest greater number
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      if (isRightOfTargetParent) {
        targetParent.right = successor;
        if (successorParent.value !== target.value) {
          successor.right = successorParent;
          successorParent.left = null;
        } else {
          successor.left = target.left;
        }
      } else if (isLeftOfTargetParent) {
        targetParent.left = successor;
        if (successorParent.value !== target.value) {
          successor.left = target.left;
          successorParent.left = null;
        } else {
          successor.left = target.left;
        }
      }
    } else if (target.left) {
      successor = target.left;
      // traverse to greatest lower number
      while (successor.right) {
        successorParent = successor;
        successor = successor.right;
      }
      if (isRightOfTargetParent) {
        targetParent.right = succesor;
        if (successorParent.value !== target.value) {
          successor.left = target.left;
        }
      } else if (isLeftOfTargetParent) {
        targetParent.left = successor;
        if (successorParent.value !== target.value) {
          successor.left = target.left;
        }
      }
    } else {
      if (isLeftOfTargetParent) {
        targetParent.left = null;
      } else {
        targetParent.right = null;
      }
    }
  }

  _getParent(value) {
    if (!this.root || this.root.value === value) {
      return null;
    }
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (!current.right) return null;
        if (current.right.value === value) return current;
        current = current.right;
      } else {
        if (!current.left) return null;
        if (current.left.value === value) return current;
        current = current.left;
      }
    }
  }

}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);
tree.insert(80);
tree.insert(230);
console.log(tree.root);
tree.remove(9);
console.log(tree.root);