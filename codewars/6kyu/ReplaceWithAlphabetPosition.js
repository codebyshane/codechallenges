// Challenge:
// Replace With Alphabet Position


// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// PREP
// Parameters:
// string


// Results:
// string of integers


// Examples:
// "The sunset sets at twelve o' clock." --> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// "What is your name?" --> "23 8 1 20 9 19 25 15 21 18 14 1 13 5"
// "You silly English Knight" --> "25 15 21 19 9 12 12 25 5 14 7 12 9 19 8 11 14 9 7 8 20"


// Solution with Psuedo: 

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) {
            result += (code - 64) + " ";
        }
    }

    return result.slice(0, result.length - 1);
}

console.log(alphabetPosition("You silly English Knight"))