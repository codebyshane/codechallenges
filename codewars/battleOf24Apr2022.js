// Challenge:
// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. 
// Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. 
// The string lengths will be from 1 character up to 10 characters, but will never be empty.



// PREP
// Parameters:
// one-word string

// Results:
// same string with first letter capitalized

// Examples:
// "shane" --> "Shane"
// "robin" --> "Robin"
// "lancelot" --> "Lancelot"

// Solution with Psuedo: 

function capitalizeWord(word) {
    // we will return the first character of the string capitalized using return `${word[0].toUpperCase()}
    // then we will concatenate the capital letter to the string. We will remove index 1, which will be the lower-case "l" from the string.
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }

capitalizeWord("lancelot")