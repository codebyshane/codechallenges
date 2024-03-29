// Challenge:
// Detect Pangram


// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// "The quick brown fox jumps over the lazy dog" --> true
// "Is it behind the rabbit" --> false
// "This is an ex-parrot" --> false


// Solution with Psuedo: 

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.toLowerCase()

    return alphabet.every(x => string.includes(x))
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog"))