// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   let aMap = {};
   let bMap = {};
   
   //'[]' creates an exclude group in regex
   stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
   stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
   
   function makeMap(string){
      let map = {};
      for(let c of string){
         //if letter only (maybe a better way to do this?)
         if(map[c])
            map[c]++;
         else
            map[c] = 1;
      }
      return map;
   }
   
  
   aMap = makeMap(stringA);
   bMap = makeMap(stringB);

   let aMapLength = Object.keys(aMap).length; 
   let bMapLength = Object.keys(bMap).length; 

   if(aMapLength !== bMapLength){
      debugger;
      return false;
   } else {
      debugger;
      for(key in aMap){
         debugger;
         if(aMap[key] !== bMap[key]){
            return false;
         }
      }
      return true;
   }

}

module.exports = anagrams;
