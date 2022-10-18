// Challenge:
// Find the Slope


// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope


// PREP
// Parameters:
// array of integers


// Results:
// string


// Examples:
// 
// 
// 


// Solution with Psuedo: 

function slope(points){
    // the formulas for finding the slope is rise/run
    let rise = points[3] - points[1];
    let run = points[2] - points[0];
    if (run == 0) {
        return "undefined"
    } else {
    return (rise / run).toString();
    };
}

slope([-10, 6, -10, 3])