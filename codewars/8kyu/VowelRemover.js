// Challenge:
// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// don't worry about uppercase vowels
// y is not considered a vowel for this kata


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Solution with Psuedo: 

function shortcut (string) {
    // use .replace() to target aeiou and replace them with empty string values.
    return string.replace(/[aeiou]/g, "");
  }

shortcut("hello")