// Challenge:
// Simple multiplication


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// 2 --> 16
// 1 --> 9
// 4 --> 32


// Solution with Psuedo: 

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}