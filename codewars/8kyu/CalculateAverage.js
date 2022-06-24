// Challenge:
// Calculate average


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// PREP
// Parameters:
// array

// Results:
// number

// Examples:
// [1,1,1] --> 1
// [1,2,3] --> 2
// [1,2,3,4] --> 2.5


// Solution with Psuedo: 

function findAverage(array) {
    if (array.length < 1) {
        return 0;
    } else {
        return array.reduce((a,b) => a + b, 0) / array.length;
    }
  }