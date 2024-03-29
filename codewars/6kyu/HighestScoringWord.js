// Challenge:
// Highest Scoring Word


// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "What is your name" --> ""
// "What is your quest" --> ""
// "What is your favorite color" --> ""


// Solution with Psuedo: 

function high(x){
    let as = x.split(' ').map(x => [...x].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
    );
    return x.split(' ')[as.indexOf(Math.max(...as))];
  }

console.log(high("What is your favorite color"))