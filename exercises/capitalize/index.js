// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
function capitalize(str) {
   let result = [];
   let words = str.split(" ");
   
   for(let word of words){
      result.push(word[0].toUpperCase() + word.slice(1,word.length));
   }

   return result.join(" ");
}
*/

function capitalize(str){
   let last = null;
   let result = str[0].toUpperCase();

   //instead of last, you could also just do str[i-1]
   for(let i=1;i<str.length;i++){
      if(last === " ")
         result = result + str[i].toUpperCase();
      else
         result = result + str[i];
      last = str[i];
   }
   
   return result;
}

module.exports = capitalize;
