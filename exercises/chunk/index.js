// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
/*
function chunk(array, size) {
   //for elements of array
   // declare a local s variable at 0
   // while s < size
   // put elements into a new subarray
   // when s == size
   //    add this subarray to result
   // return result
   let result = [];
   let s = 0;
   let i = 0;
   let subArray = [];
   for(let e of array){
      let numLeft = array.length - i;

      if (s === size){
         result.push(subArray);
         subArray = [e];
         s = 1;
      }
      else{
         s++;
         subArray.push(e);
      }

      if(numLeft < size){
         subArray = [];
         debugger;
         for(let j=0;j<numLeft;j++){
            debugger;
            subArray.push(array[i+j]);
         }
         result.push(subArray);
         break;
      }

      i++;
   }

   console.log(result);
   return result;
}

function chunk(array,size){
   //chunked v of array
   let chunked = [];

   for(let el of array){
      //important point: you are using the last variable here as the chunk!
      const last = chunked[chunked.length - 1];
      
      //if you have no chunk at the end of the array, or the length of the chunk 
      //at the end has met your desired size, push a new chunk to the result
      if(!last || last.length === size){
         chunked.push([el]);
      } else {
         //otherwise push an element to your current chunk at the end
         //you can ignore a step where you need to push a partial chunk
         //using this method, because you are simply building up chunks, adding new ones
         //only if a chunk does not exist at the end of the array, or if the chunk in question is the correct size already
         last.push(el);
      }
   }

   return chunked;

}


function chunk(array,size){
   //think of this like counting cards into groups
   //fill each group until the size, once you're full
   //push a new group
   const chunked = [];
   for(let item of array){
      let last = chunked[chunked.length - 1];
      if(!last || last.length === size){ 
         chunked.push([item]);
      } else {
         last.push(item);
      }
   } 
   return chunked;
}
*/

//// ALTERNATE SOLUTION //////

module.exports = chunk;


