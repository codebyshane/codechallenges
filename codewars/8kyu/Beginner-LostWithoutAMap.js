// Challenge:
// Beginner - Lost Without a Map


// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// PREP
// Parameters:
// array of integers

// Results:
// array of integers

// Examples:
// [1, 2, 3] --> [2, 4, 6]
// [2, 4, 6] --> [4, 8, 12]
// [4, 8, 12] --> [8, 16, 24]


// Solution with Psuedo: 

function maps(x){
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}

console.log(maps([1, 2, 3]));