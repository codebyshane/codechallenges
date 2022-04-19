// Challenge:
// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



// PREP
// Parameters:
// array of integers as strings and numbers


// Results:
// number

// Examples:
// [1, "2", "3", 4, 5, "6", "7", "8", 9] --> 45
// [100, 200, 300, "400", 500, "600", "700", "800", 900] --> 4500
// ["2", "4", "6", 8, "10", "12"] --> 42

// Solution with Psuedo: 

function sumMix(x){
    // we will use the built-in javascript object array.reduce()
    return x.reduce((x, y) => Number(x) + Number(y), 0);
}

sumMix([1, "2", "3", 4, 5, "6", "7", "8", 9])