// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
function palindrome(str) {
   //return str.split('').reverse().join() === str;
   let rstr="";

   for (let c of str){
      //note this is equal NOT +=
      rstr = c + rstr;
   }
   return rstr === str;
}


function palindrome(str){
   const reversed = str.split('').reverse().join('');
   return str === reversed;
}
*/

//making use of advanced array helper 'every'
function palindrome(str){
   let i = 0;
   return str.split('').every((val,i)=>{
      return val === str[(str.length-1) - i];
   });
}

module.exports = palindrome;
