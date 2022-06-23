// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
   constructor(){
      this.data = [];
   }

   add(record){
      //unshift will add to the FRONT of the array
      this.data.unshift(record);
   }

   remove(){
      //using pop method on an array removes and returns the last element
      return this.data.pop();
   }
}

module.exports = Queue;
