// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//reasonable solution, non-recursive though
/*
function pyramid(n) {
   let numChars = 1;
   let numSpaces = n - 1;
   for(let i=0;i<n;i++){
      let str = "";
      for(let j=0;j<numSpaces;j++){
         str+= ' ';
      }

      for(let j=0;j<numChars;j++){
         str+= '#';
      }

      for(let j=0;j<numSpaces;j++){
         str+= ' ';
      }
      console.log(str);
      numChars+=2;
      numSpaces--;
   }

}*/

function pyramid(n,numChars = 1, numSpaces = (n - 1)){
   let c = '#';
   let s = ' ';
   if(numChars === ((2*n)-1)){
      console.log(c.repeat(numChars));
      return;
   }

   //is there a better way to build these strings?
   console.log(s.repeat(numSpaces) + c.repeat(numChars) + s.repeat(numSpaces));
   return pyramid(n,numChars+2,numSpaces-1);
   
}

//base case will be when numChars === 2n - 1;
//otherwise recurse through and keep adding to numchars and numspaces

module.exports = pyramid;
