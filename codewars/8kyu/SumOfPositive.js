// Challenge:
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



// PREP
// Parameters:
// array of numbers

// Results:
// number

// Examples:
// [1,-4,7,12] => 1 + 7 + 12 = 20
// [0,-4,-9,-18] => 0
// [1,2,3,4,5] => 1 + 2 + 3 + 4 + 5 = 15

// Solution with Psuedo: 

function positiveSum(arr) {
    let sum = 0;
    for (const number of arr){
        if (number > 0){
            sum += number
        }
    }
    return sum
}

positiveSum([1,-4,7,12])