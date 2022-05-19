// Challenge:
// Square(n) Sum


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// PREP
// Parameters:
// number
// array

// Results:
// number

// Examples:
// [1, 2, 2] --> 9
// [5, 10, 15] --> 350
// [2, 2, 2] --> 12

// Solution with Psuedo: 

function squareSum(numbers){
    // create new variable to hold sum and will be our output
    let sum = 0;
    // create a loop to go through every iteration of the array, square it, and add it to sum
    for (let i = 0; i <= numbers.length-1; i++){
        sum += numbers[i] ** 2
    }
    return sum;
}

squareSum([2, 2, 2])