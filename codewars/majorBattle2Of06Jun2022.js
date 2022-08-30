// Challenge:
// Adding Big Numbers


// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.


// PREP
// Parameters:
// string of numbers

// Results:
// string of numbers

// Examples:
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// add("999", "111"); -> "1110"


// Solution with Psuedo: 

function add(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
  }

add("63829983432984289347293874", "90938498237058927340892374089");