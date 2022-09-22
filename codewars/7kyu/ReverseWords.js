// Challenge:
// Reverse words


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// "A man a plan a canal panama" ==> "amanap lanac a nalp a nam A"


// Solution with Psuedo: 

function reverseWords(str) {
    let words = str.split(' ');
    let reversedWords = [];

    for (let i = 0; i < words.length; i++){
        reversedWords.push(words[i].split('').reverse().join(''))
    }

    return reversedWords.join(' ');
  }

console.log(reverseWords("The quick brown fox jumps over the lazy dog."))