// Challenge:
// Beginner - Reduce but Grow


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// PREP
// Parameters:
//

// Results:
//

// Examples:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// [4, 1, 1, 1, 4] => 16
// [2, 2, 2, 2, 2, 2] => 64


// Solution with Psuedo: 

function grow(x){
    return x.reduce((a, b) => a * b, 1)
}