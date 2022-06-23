// Challenge:
// Invert values


// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.



// PREP
// Parameters:
// array of numbers

// Results:
// array of numbers

// Examples:
// [1,2,3,4,5] == [-1,-2,-3,-4,-5]
// [1,-2,3,-4,5] == [-1,2,-3,4,-5]
// [] == []


// Solution with Psuedo: 
function invert(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * -1);
    }
    return output;
 }