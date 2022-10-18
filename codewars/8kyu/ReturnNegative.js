// Challenge:
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



// PREP
// Parameters:
// number

// Results:
// negative number

// Examples:
// see above

// Solution with Psuedo: 

function makeNegative(num) {
    // we will turn every number inputted into an absolute number, and place a - before it to make it a negative.
    return (-Math.abs(num));
  }