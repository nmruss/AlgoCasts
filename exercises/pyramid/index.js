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

}

//iterative solution
function pyramid(n) {
   let numSpaces = n - 1;
   let size = (2*n) - 1;
   for(let row=0;row<n;row++){
      let str = "";
      for (let col=0;col< size;col++){
         if(col < numSpaces)
            str+=' ';
         else if(col >= (size-numSpaces))
            str+= ' ';
         else
            str+='#';

      }
      numSpaces--;
      console.log(str);
   }
}
*/

/*
function pyramid(n,row = 0,col = 0,numChars = 1, numSpaces = (n-1),str = ""){
   let size = ((2*n)-1);
   
   //end of row
   if(col === size){
      console.log(str);
      //if you just printed all chars
      if(numChars === size)
         return;
      else
         return pyramid(n,row+1,0,numChars + 2,numSpaces-1);
   }
   
   //going through columns
   if(col < numSpaces)
      str+= ' ';
   else if (col >= (size-numSpaces))
      str+= ' ';
   else
      str+='#';

   return pyramid(n,row,col+1,numChars,numSpaces,str);
}
*/

function pyramid(n,row=0,col=0,str=""){
   let mid = Math.floor((2*n - 1) / 2);
   let size = (2*n) - 1;

   //end of row
   if(col === size){
      //end of pyramid
      if(row === n)
         return;
      else{
         console.log(str);
         return pyramid(n,row+1,0);
      }
   }

   if(mid - row <= col && mid + row >= col){
      str+= '#';
   } else {
      str+= ' ';
   }

   return pyramid(n,row,col+1,str);
}

pyramid(4);

/*
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
*/
//base case will be when numChars === 2n - 1;
//otherwise recurse through and keep adding to numchars and numspaces

module.exports = pyramid;
