// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
function matrix(n) {
   //want to create a 2d array with a size of n x n
   //maybe:
   // set all values to zero
   //    increase 'x' until end 
   //    increase 'y' until end 
   //    decrease 'x' until end 
   //    decrease 'y' until end 
   //    repeat until you reach n
   // end: defined as anything but 0 (undefined or a number > 0)
   function createMatrix(n){
      let m = [];
      for(let i=0;i<n;i++){
         m[i] = [];
         for(let j=0;j<n;j++){
            m[i].push(0);
         }
      }
      return m;
   }

   let mtx = createMatrix(n);
   let count = 0;

   //need to traverse this matrix in a spiral, not by row,col
   //[0 0] [0 1] [0 2] [1 2] [2 2] [2 1] [2 0] [1 0] [1 1]
}

function matrix(n){
   const results = [];
   let counter = 1;
   let startIndex = 0;
   let endIndex = n;

   //create and empty n x n matrix
   for(let i=0;i<n;i++){
      results.push([]);
      for (let j=0;j<n;j++){
         results[i].push(0);
      }
   }
   
   while (startIndex < (n/2) && endIndex > (n/2)){
      for(let i=0;i<n;i++){
         
      }
   }
}

*/

//the idea here is to create counter variables that track 
//the boundaries of where you are on the matrix
//while these boundaries are not criss-crossed over each other
//you have a series of for loops for the top, right, bottom
//and left sides of the matrix, repeating mini spirals until everything has been filled
function matrix(n){
   const results = [];

   for(let i=0;i<n;i++){
      results.push([]);
   }

   let counter = 1;

   let startColumn = 0;
   let endColumn = n - 1;

   let startRow = 0;
   let endRow = n - 1;

   while (startColumn <= endColumn && startRow <= endRow){
      //4 for loops, each responsible for a side
      //top
      for (let i=startColumn;i<=endColumn;i++){
         results[startRow][i] = counter;
         counter++;
      }

      startRow++;

      //right
      for(let i=startRow;i<=endRow;i++){
         results[i][endColumn] = counter;
         counter++;
      }

      endColumn--;
     
      //bottom
      for(let i=endColumn;i>=startColumn;i--){
         results[endRow][i] = counter;
         counter++;
      }

      endRow--;

      //left
      for(let i=endRow;i>=startRow;i--){
         results[i][startColumn] = counter;
         counter++;
      }

      startColumn++;
   }

   return results;
}

console.log(matrix(5));


module.exports = matrix;
