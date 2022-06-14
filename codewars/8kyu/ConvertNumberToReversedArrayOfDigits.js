// Challenge:
// Convert number to reversed array of digits


// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]


// PREP
// Parameters:
// integer

// Results:
// array of single digits

// Examples:
// 35231 => [1,3,2,5,3]
// 0 => [0]
// 0362 => [0,3,6,2]


// Solution with Psuedo: 

function digitize(n) {
   return n.toString().split('').map(Number).reverse();
  }

console.log(digitize(35231))