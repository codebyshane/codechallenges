// Challenge:
// Opposite number


// Very simple, given an integer or a floating-point number, find its opposite.


// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// 1 --> -1
// 14 --> -14
// -34 --> 34


// Solution with Psuedo: 

function opposite(number) {
    if (number > 0) {
        return -Math.abs(number)
    } else {
        return Math.abs(number)
    }
  }

opposite(-14)