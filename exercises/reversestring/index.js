// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
   debugger;
   return str.split('').reduce((reversed,character)=>{
      debugger;
      return character + reversed;
   },'')
}

reverse('asdf');


//one liner using js built in functions
function reversestr(){
   return str.split('').reverse().join();
}

//adding c to beginning of the string
function reversed(str){
   let reversed = '';
   for (let c of str){
      reversed = c + reversed;
   }
}

//ES5.1 reduce helper solution
function reducehelperreverse(str){
   //reduce is used to take values of an array and condense them to a single value
   //takes two args (arrow function, initial value of result)
   //
   //on each iteration, the first argument of the arrow function
   //is the result of the value of the last returned function
   //the second is the element in the current iteration of the array
   //reduce runs 1 time for every element of the 'reducee' array (str here)
   str.split('').reduce((reversed,character)=>character + reversed,'')
}

/*
function reverse(str) {
   var r = "";
   for (var i=str.length-1;i>=0;i--){
      r+=str[i];
   }
   return r;
}
*/

module.exports = reverse;
