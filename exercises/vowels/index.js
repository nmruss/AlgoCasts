// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
/*
//iterative
function vowels(str) {
   let vowels = {'a':true,'e':true,'i':true,'o':true,'u':true};
   let count = 0;

   for(let c of str.toLowerCase()){
      if(vowels[c])
         count++;
   }
   return count;
}
*/
//regex
function vowels(str) {
   let regex = /[aeiou]/gi;
   let result = str.match(regex);
   return result ? result.length : 0;
}

module.exports = vowels;
