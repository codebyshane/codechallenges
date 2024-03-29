// Challenge:
// Is this a triangle?


// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


// PREP
// Parameters:
// three integers


// Results:
// boolean


// Examples:
// (1, 2, 2) --> true
// (7, 2, 2) --> false
// (3, 3, 3) --> true


// Solution with Psuedo: 

function isTriangle(a,b,c){
   return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(3,3,3))