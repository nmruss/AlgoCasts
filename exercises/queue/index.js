// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//in javascript all you need to do is just remove and add elements from an array
class Queue {
   constructor(d){
      this.data = d ? d : [];
   }

   //unshift for adding
   add(e){
      this.data.unshift(e);   
   };
   
   //pop for removing and return the removed value
   remove(){
      return this.data.pop();
   }
}


module.exports = Queue;
