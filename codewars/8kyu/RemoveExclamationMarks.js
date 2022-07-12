// Challenge:
// Remove exclamation marks


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// "Hello World!" --> "Hello World"
// 
// 


// Solution with Psuedo: 

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }