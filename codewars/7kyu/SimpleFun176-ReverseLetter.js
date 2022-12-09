// Challenge:
// Simple Fun #176: Reverse Letter


// Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


// PREP
// Parameters:
// str


// Results:
// str


// Examples:
// "ultr53o?n" --> "nortlu"
// 
// 


// Solution with Psuedo: 

function reverseLetter(str) {
    let array = str.split('').reverse();
    let output = array.filter(x => x.match(/[a-z]/g))

    return output.join('')
  }

console.log(reverseLetter("ultr53o?n"))