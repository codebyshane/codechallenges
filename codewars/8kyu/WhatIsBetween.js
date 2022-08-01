// Challenge:
// What is between?


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// PREP
// Parameters:
// two numbers


// Results:
// array of numbers


// Examples:
// (1, 4) --> [1, 2, 3, 4]
// (3, 9) --> [3, 4, 5, 6, 7, 8, 9]
// (7, 14) --> [7, 8, 9, 10, 11, 12, 13, 14]


// Solution with Psuedo: 

function between(a, b) {
    let result = []
    for (let i = a; i <= b; i++){
        result.push(i);
    }

    return result;
  }