// Challenge:
// Hex to Decimal


// Complete the function which converts hex number (given as a string) to a decimal number.


// PREP
// Parameters:
// string hex number


// Results:
// decimal number


// Examples:
// "1" --> 1
// "a" --> 10
// "-C" --> -12


// Solution with Psuedo: 

function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

console.log(hexToDec("a"))