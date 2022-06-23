// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//
//Charmap Solution
/*
function anagrams(stringA, stringB) {
   let aMap = {};
   let bMap = {};
   
   //'[]' creates an exclude group in regex
   stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
   stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
   
   function makeMap(string){
      let map = {};
      for(let c of string){
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
      return false;
   } else {
      for(key in aMap){
         if(aMap[key] !== bMap[key]){
            return false;
         }
      }
   }

   return true;

}
*/

function makeCharMap(str){
   let charMap = {};
   for(let c of str){
      if(charMap[c])
         charMap[c]++;
      else charMap[c] = 1;
   }
   return charMap;
}

//sorting and comparison solution
function anagrams(stringA, stringB){
   return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
   //cleaning and sorting the string
   return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join();
}

module.exports = anagrams;
