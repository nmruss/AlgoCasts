// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  //strategy is to have two counters, one moving twice as fast
  //as the other, when the fast counter reaches the end of the list
  //the slow counter will be at the midpoint
  let slow = list.getAt(0);
  let fast = list.getAt(0);

  //left side will evaluate first, so check it is not null
  while (fast.next && fast.next.next) {
    //fast moves at twice the pace of slow
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = midpoint;
