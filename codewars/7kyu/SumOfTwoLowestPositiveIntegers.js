// Challenge:
// Sum of two lowest positive integers


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// PREP
// Parameters:
// array of integers


// Results:
// integer


// Examples:
// [19, 5, 42, 2, 77] --> 7
// [10, 343445353, 3453445, 3453545353453] --> 3453455
// [1, 2, 3, 4, 5, 6, 7, 8, 9] --> 3


// Solution with Psuedo: 

function sumTwoSmallestNumbers(numbers) {  
    // sort array
    let sortArray = numbers.sort((a, b) => a - b);

    return (sortArray[0] + sortArray[1])
  }

console.log(sumTwoSmallestNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1]));