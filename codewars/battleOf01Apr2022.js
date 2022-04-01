//Challenge:
//Complete the solution so that it reverses the string passed into it.

//PREP
//Parameters:
// string

//Results:
// reversed string

//Examples:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// 'bubble'  =>  'elbbub'

//Solution with Psuedo: 

//create a function that has a string as an argument
function solution(str){
    // To reverse the string, we need to split the string into an array. Then we reverse the order of the array. Then we join the new reversed array back into a string.
    return str.split('').reverse().join('');
  }