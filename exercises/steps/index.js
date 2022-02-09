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

steps(1);

module.exports = steps;
