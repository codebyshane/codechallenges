// Challenge:
// Geometry Basics: Distance between points in 2D


// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.


// PREP
// Parameters:
// numbers


// Results:
// point objects


// Examples:
// ((3, 3), (3, 3)) --> 0
// ((1, 6), (4, 2)) --> 5
// ((-10.2, 12.5), (0.3, 14.7)) --> 10.728001


// Solution with Psuedo: 

function distanceBetweenPoints(a, b) {
    // formula for finding distance between two points on a 2D plane:
    // d = sqrt[ ((bX - aX)^2) + ((bY - aY)^2) ]
    // Math.hypot will take care of this for us
    return Math.hypot(a.x - b.x, a.y - b.y);
  }