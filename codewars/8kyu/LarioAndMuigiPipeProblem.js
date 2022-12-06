// Challenge:
// Lario and Muigi Pipe Problem


// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task

// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


// PREP
// Parameters:
// array of numbers


// Results:
// array of numbers


// Examples:
// [1,2,3,5,6,8,9] --> [1,2,3,4,5,6,7,8,9]
// [1,2,3,12] --> [1,2,3,4,5,6,7,8,9,10,11,12]
// [-1,4] --> [-1,0,1,2,3,4]


// Solution with Psuedo: 

function pipeFix(numbers){
    let outputArray = []
    let start = numbers.sort((a, b) => a - b)[0];
    let end = numbers.sort((a, b) => b - a)[0];

    for (let i = start; i <= end; i++) {
        outputArray.push(i)
    }

    return outputArray;
}

console.log(pipeFix([-1,4]))