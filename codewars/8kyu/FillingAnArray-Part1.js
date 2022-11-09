// Challenge:
// Filling an array (part 1)


// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


// PREP
// Parameters:
// number


// Results:
// array


// Examples:
// 5 --> [0, 1, 2, 3, 4]
// 6 --> [0, 1, 2, 3, 4, 5]
// 11 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Solution with Psuedo: 

const arr = N => Array.from({length: N}, (_, index) => index)