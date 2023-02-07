// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //keep in mind, this could be replaced by the more generic this.insertFirst(data,0);
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    //length -2
    if (!this.head) {
      return null;
    }

    //length -1
    if (!this.head.next) {
      this.head = null;
      return;
    }

    //length 0 or more
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      //set previous.next value to null, cutting off the last node
      //else update the previous and node values
      previous = node;
      node = node.next;
    }
    //no next node
    previous.next = null;
    return;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(int) {
    if (this.size() < int || !this.head) {
      return null;
    }

    let i = 0;
    let node = this.head;

    while (i < int) {
      node = node.next;
      i++;
    }

    return node;
  }

  removeAt(int) {
    //check edge cases
    if (this.size() < int || !this.head) return null;
    if (!this.getAt(int)) return null;

    //remove first node
    if (int === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(int - 1);
    previous.next = this.getAt(int + 1);
    //could also be previous.next.next
    return;
  }

  insertAt(data, int) {
    //out of bounds

    //empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    //first element
    if (int === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //else

    //get the previous node, or the last node if out of bounds
    let prev = this.getAt(int - 1) || this.getLast();

    //create new node with the prev.next value as its own next
    let node = new Node(data, prev.next);

    //assign the prev node its 'new' next
    prev.next = node;

    //create node from data
    //find node one before insert point (prev)
    //assign created node.next to prev.next
    //assign prev.next the new node
  }

  forEach(f) {
    //will iterate through each node on the chain and run a function on that node
    var i = 0;
    while (i < this.size()) {
      f(this.getAt(i));
      i++;
    }
    return this.data;
  }
}

module.exports = { Node, LinkedList };
