// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//maxChar("aaaaabbbbbb");
/*
function maxChar(str) {
   let chars = {};

   //creating a character map
   for(let v of str){
      chars[v] ? chars[v]++ : chars[v]=1;
   }

   let mostCommon = {c:"",num:""};
   Object.keys(chars).forEach((k)=>{
      if(chars[k] > mostCommon.num){
         mostCommon.c = k;
         mostCommon.num = chars[k];
      }
   })
   
   return mostCommon.c; 
}
*/

function maxChar(str) {
   let chars = {};
   let max = 0;
   let maxChar = '';

   for (let v of str){
      chars[v] = chars[v]++ || 1;
   }

   //for 'in' syntax rather than 'of'
   //this will loop through keys of the object
   for (let c in chars){
      if(chars[c] > max){
         max = chars[c];
         maxChar = c;
      }
   }
   return maxChar;
}


module.exports = maxChar;
