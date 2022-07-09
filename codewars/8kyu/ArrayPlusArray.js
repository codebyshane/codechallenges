// Challenge:
// Array plus array


// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// PREP
// Parameters:
// two array

// Results:
// array

// Examples:
// [1,2,3], [4,5,6] --> 21 
// [0,0,0], [0,0,0] --> 0
// [100, 200, 300], [40, 500, 600] --> 2100


// Solution with Psuedo: 

function arrayPlusArray(arr1, arr2) {
    return ((arr1.reduce((a, b) => a + b, 0)) + arr2.reduce((a, b) => a + b, 0));
  }