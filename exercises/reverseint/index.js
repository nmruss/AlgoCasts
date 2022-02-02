// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
function reverseInt(n) {
   //handle zero
   if(n === 0) return 0;

   //start reverse string
   let rv = "";

   //to string, split and loop, ignoring negative
   n.toString().split('').forEach(v=>{
      if(v !== "-"){
         rv = v + rv; 
      }
   })
   
   //this function is unnecessary but good practice
   //parseint removes leading zeroes anyway
   function removeLeadingZeroes(num){
      let leadingZeroes = true;
      let newNum = "";
      num.split('').forEach(v=>{
         //ignore characters until you hit a number that is not zero
         if(v !== '0' && v !== '-')
            leadingZeroes = false;
         
         if(leadingZeroes === false)
            newNum += v;
      });
      return newNum;
   }

   removeLeadingZeroes(rv);

   //if original string started with a negative, keep the negative
   if(n.toString().split('')[0] === "-"){
      rv = "-" + rv;
   }

   //return the reversed int
   return parseInt(rv);
}
*/

function reverseInt(n){
   let rv = "";
   /*
   n.toString().split('').forEach(v=>{
      if(v!== "-")
         rv = v + rv;
   })
   */

   rv = n.toString().split('').reverse().join('');

   //maintain sign by mulitplying by Math.sign: one of (-1,0,1)
   return parseInt(rv) * Math.sign(n);
}

module.exports = reverseInt;
