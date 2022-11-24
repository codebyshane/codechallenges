// Challenge:
// No oddities here


// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


// PREP
// Parameters:
// array


// Results:
// array


// Examples:
// 
// 
// 


// Solution with Psuedo: 

function noOdds( values ){
    let output = []

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 == 0) {
            output.push(values[i])
        }
    }

    return output;
  }