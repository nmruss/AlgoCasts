// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
   for(let v=1;v<=n;v++){
      //is v a multiple of 3 and 5?
      //any number that is a multiple of both 3 and 5 will also be a mutliple of 15
      //3 * 5 = 15
      if(v % 15 == 0)
         console.log("fizzbuzz");
      else if(v % 5 == 0)
         console.log("buzz");
      else if(v % 3 == 0)
         console.log("fizz");
      else
         console.log(v);
   }
}

module.exports = fizzBuzz;
