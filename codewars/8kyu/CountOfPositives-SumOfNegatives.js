// Challenge:
// Count of positives / sum of negatives


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// PREP
// Parameters:
// array of numbers

// Results:
// array

// Examples:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] ==> [10, -65]
// 
// 


// Solution with Psuedo: 

function countPositivesSumNegatives(input) {
    let output = [0, 0];
    if (input === null || input.length < 1) {
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] <= 0) {
            output[1] += input[i];
        } else {
            output[0] += 1;
        }
    }
    return output;
  }

  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));