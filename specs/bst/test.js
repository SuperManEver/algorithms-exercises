class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * node -> 6
   * value -> 8
   */
  insert(node, value) {
    if (node.value === value) {
      return;
    }

    if (node.value > value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insert(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insert(node.right, value);
      }
    }
  }

  insert_iter(node, value) {
    while (node) {
      if (node.value === value) {
        break;
      }

      if (node.value > value) {
        if (!node.left) {
          node.left = new Node(value);

          break;
        } else {
          node = node.left;
          continue;
        }
      } else {
        if (!node.right) {
          node.right = new Node(value);

          break;
        } else {
          node = node.right;
          continue;
        }
      }
    }
  }

  findSmallest(node) {
    if (!node) {
      return null;
    }

    if (!node.left) {
      return node;
    }

    return this.findSmallest(node.left);
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (node.value === value) {
      /**
       * 1. node has no children
       */
      if (!node.left && !node.right) {
        return null;
      }

      /**
       * 2. Node has one child
       */

      if (node.left && !node.right) {
        return node.left;
      }

      if (!node.left && node.right) {
        return node.right;
      }

      /**
       * 3. Node has two children
       */

      const leftSmallest = this.findSmallest(node.right);

      if (!leftSmallest) {
        return null;
      }

      node.value = leftSmallest.value;

      this.removeNode(node.right, leftSmallest.value);

      return node.value;
    }

    if (node.value > value) {
      node.left = this.removeNode(node.left, value);
    } else {
      node.right = this.removeNode(node.right, value);
    }

    return node;
  }

  add(value) {
    if (!this.root) {
      const node = new Node(value);
      this.root = node;
      return;
    }

    this.insert_iter(this.root, value);
  }

  traverse(node) {
    if (!node) {
      return null;
    }

    return {
      value: node.value,
      left: this.traverse(node.left),
      right: this.traverse(node.right),
    };
  }

  toObject() {
    return this.traverse(this.root);
  }
}

function print(node, level) {
  // console.log('node: ', node);

  if (!node) {
    console.log(multStr('\t', level), '');
  } else {
    console.log(multStr('\t', level), '[', node.value, ']');

    print(node.left, level - 1);
    console.log('\n');
    print(node.right, level - 1);
  }
}

function getNode(node, value) {
  if (!node) {
    return null;
  }

  if (node.value === value) {
    return node;
  }

  if (node.value > value) {
    return getNode(node.left, value);
  } else {
    return getNode(node.right, value);
  }
}

function multStr(symbol, num) {
  let result = '';

  while (num > 0) {
    result += symbol;

    num--;
  }

  return result;
}

function main() {
  const nums = [10, 6, 8];

  const tree = new Tree();

  nums.forEach((num) => {
    tree.add(num);
  });

  tree.add(7);

  const objs = tree.toObject();

  console.log(objs);

  tree.removeNode(8);

  console.log(tree.toObject());
}

main();
