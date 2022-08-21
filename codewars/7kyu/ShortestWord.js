// Challenge:
// Shortest Word


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// PREP
// Parameters:
// string of words


// Results:
// integer


// Examples:
// "What is your name" --> 2
// "Your father was a hamster" --> 1
// "Those responsible have been sacked" --> 4


// Solution with Psuedo: 

function findShort(s){
    return Math.min(...s.split(' ').map(s => s.length));
}

console.log(findShort("Those responsible have been sacked"))