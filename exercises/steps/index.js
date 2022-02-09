// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
/*
function steps(n) {
   let numChars = 1;
   let numSpaces = n - 1;
   for(let i=0;i<n;i++){
      let str="";
      for(let j=0;j<numChars;j++){
         str+='#';
      }
      for(let k=0;k<numSpaces;k++){
         str+=' ';
      }
      console.log(str);
      numChars++;
      numSpaces--;
   }
}


function steps(n){
   for(let row=0;row<n;row++){
      let step = "";
      for(let col=0;col<n;col++){
         //if column is <= row
         //add a pound
         //otherwise add a space
         if(col <= row)
            step+="#";
         else
            step+=" ";
      }
      console.log(step);
   }
}


function printNumber(num){
   //stop recurring if n === 0
   if(printNum>0)
      return printNumber(num-1);
   console.log(n);
   printNumber(num - 1);
}
*/

function steps(n,row = 0,stair = ""){
   //end of work
   if(n == row){
      return;
   }

   //end of row
   if(n === stair.length){
      console.log(stair);
      return steps(n, row+1);
   }

   //building stair string
   if(stair.length <= row)
      stair+='#';
   else
      stair+=' ';
   
   steps(n,row,stair);
}


module.exports = steps;
