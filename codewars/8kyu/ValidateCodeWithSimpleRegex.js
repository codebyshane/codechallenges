// Challenge:
// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. 
// The function should check if the code begins with 1, 2, or 3 and return true if so. 
// Return false otherwise.

// You can assume the input will always be a number.


// PREP
// Parameters:
// integer

// Results:
// boolean

// Examples:
// 289376450238975403161 --> true
// 894567043984538756 --> false
// 3845760945780 --> true


// Solution with Psuedo: 

function validateCode (code) {
    // we will use /^ to start our validation at the beginning of the input
    // then [1-3] to loook for the values 1-3
    return (/^[1-3]/g.test(code))
    }

validateCode(389485646749)