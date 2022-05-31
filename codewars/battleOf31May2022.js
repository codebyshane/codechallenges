// Challenge:
// Find the Remainder


// Task:

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.


// PREP
// Parameters:
// two numbers

// Results:
// number or NaN

// Examples:
// (17, 5) --> 2
// (0, 1) --> NaN
// (15, 30) --> 0


// Solution with Psuedo: 

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if (n >= m){
        return n % m
    }else {
        return m % n
    }
  }

remainder(17, 5)