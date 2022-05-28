// Challenge:
// Powers of 2


// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


// PREP
// Parameters:
// number

// Results:
// array

// Examples:
// n = 0  --> [1]
// n = 1  --> [1, 2]
// n = 2  --> [1, 2, 4]


// Solution with Psuedo: 

function powersOfTwo(n){
    // declare a variable to hold empty array
    let output = [];
    // loop through the powers of 2 up to and including n.
    for (let i = 0; i <= n; i++){
        // push the result to the enmpty array
        output.push(2**i);
    }
    // return the array after the loop finishes
    return output;
  }

powersOfTwo(6);