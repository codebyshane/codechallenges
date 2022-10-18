// Challenge:
// Grasshopper - Check for factor


// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


// PREP
// Parameters:
// two numbers

// Results:
// boolean

// Examples:
// (144, 12) --> true
// (1000, 13) --> false
// (81, 3) --> true


// Solution with Psuedo: 

function checkForFactor (base, factor) {
    // if base % factor is anything but 0, then it is not a factor
    return base % factor == 0;
  }

checkForFactor(144, 12);