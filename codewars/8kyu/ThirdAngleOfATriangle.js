// Challenge:
// Third Angle of a Triangle


// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


// PREP
// Parameters:
// two numbers

// Results:
// number

// Examples:
// 30, 60 --> 90
// 60, 60 --> 60
// 43, 78 --> 59


// Solution with Psuedo: 

function otherAngle(a, b) {
    return 180 - a - b;
  }