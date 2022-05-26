// Challenge:
// Twice as old


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// (32, 2) --> 28
// (16, 0) --> 16
// (66, 31) --> 4


// Solution with Psuedo: 

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // we will return an absolute number so it will catch if a father is not yet twice as old as his son
    return Math.abs((dadYearsOld - (sonYearsOld * 2)));
  }

twiceAsOld(55, 30)