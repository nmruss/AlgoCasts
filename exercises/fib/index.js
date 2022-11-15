// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative
//O(n) runtime complexity
/*
function fib(n) {
   const result = [0,1];
   for(let i=2;i<n+1;i++){
      result.push(result[i-1] + result[i-2]);     
   }
   return result[n];
}
*/

//recursive
//this works because you are going all the way down to n=1;
//then you spin back up through the stack and add the numbers correctly for the sequence
//
//memorize this solution! its a good example of a problem
//that would be nearly impossible to solve on your own
function fib(n) {
  //base case
  if (n < 2) return n;
  //recursive case
  return fib(n - 1) + fib(n - 2);
}

//accepts a function and returns the memoized versions
//a generic memoization function is a great tool to have
//for improving the speed of many algorithms
function memoize(fn) {
  const cache = {};
  //using the spread operator
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    //using apply to keep our args within context
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

fib = memoize(fib);

module.exports = fib;
