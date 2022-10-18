// Challenge:
// Century From Year

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task

// Given a year, return the century it is in.



// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17

// Solution with Psuedo: 

function century(year) {
    // we will use Math.ceil() to round up to the nearest integer
    return Math.ceil(year/100);
  }