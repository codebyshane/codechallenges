// Challenge:
// Descending Order


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// PREP
// Parameters:
// integers


// Results:
// rearranged integers


// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


// Solution with Psuedo: 

function descendingOrder(n){
    // put integers into an array
    let array = n.toString().split('')

    // sort array by largest to smallest
    array.sort((a, b) => b - a)

    // convert array to string
    array.join('');

    // return as a number
    return Number(array.join(''))
  }

console.log(descendingOrder(42145))