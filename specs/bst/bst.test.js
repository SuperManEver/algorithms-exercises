/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

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

// you might consider using a Node class too
// class Node {
//   // code maybe goes here
// }

// unit tests
// do not modify the below code

function main() {
  const nums = [10, 8, 6];

  const tree = new Tree();

  nums.map((num) => tree.add(num));

  tree.add(7);

  console.log(tree);
}

describe.only('Binary Search Tree', function () {
  it('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();
    // render(objs, nums);

    expect(objs.value).toEqual(3);

    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();

    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();

    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();

    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();

    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});
