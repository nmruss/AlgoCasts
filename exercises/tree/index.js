// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((item) => {
      return item.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /*
  accepts a function argument that will be called with every node in the tree
  traverseBF(f) {
    let arr = [];
    const root = this.root;
    arr.push(root);

    while (arr.length > 0) {
      const first = arr.shift();
      let i = 0;
      if (first[i]) f(first[i]);
      while (i < first.length) {
        arr.push(first.children[i]);
        i++;
      }
    }
  }
  */

  traverseBF(fn) {
    //basic algorithm is to use a stack
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      for (let child of node.children) {
        arr.push(child);
      }
      //spread operator will push child elements like a for loop would
      //arr.push(...node.children);

      fn(node);
    }
  }

  traverseDF(fn) {
    //basic algorithm is to use a queue
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      //need to iterate backwards for adding these to queue in the correct order
      for (let i = node.children.length - 1; i >= 0; i--) {
        arr.unshift(node.children[i]);
      }
      //arr.unshift(...node.children);

      fn(node);
    }
  }
}

module.exports = { Tree, Node };
