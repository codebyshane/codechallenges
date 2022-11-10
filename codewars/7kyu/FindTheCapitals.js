// Challenge:
// Find the capitals


// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


// PREP
// Parameters:
// string


// Results:
// array


// Examples:
// 
// 
// 


// Solution with Psuedo: 

var capitals = function (word) {
	let indexes = []

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indexes.push(i)
        }
    }

    return indexes;
};

console.log(capitals("CodEWaRs"))