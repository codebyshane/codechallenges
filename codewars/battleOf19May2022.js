// Challenge:
// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.



// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// time = 3 --> litres = 1
// time = 6.7 --> litres = 3
// time = 11.8 --> litres = 5

// Solution with Psuedo: 

function litres(time) {
    // we will use Math.floor to round down to the nearest integer.
    return Math.floor(time/2);
  }