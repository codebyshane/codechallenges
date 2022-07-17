// Challenge:
// Double Char


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):

// "String"      -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo  WWoorrlldd"
// "1234!_ "     -> "11223344!!__  "
// Good Luck!


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// "String" --> "SSttrriinngg"
// "Hello World" --> "HHeelllloo  WWoorrlldd"
// "1234!_ " --> "11223344!!__  "


// Solution with Psuedo: 

function doubleChar(str) {
    let double = ""
    for (let i = 0; i < str.length; i++) {
        double += str.charAt(i) + str.charAt(i);
    }
    return double;
  }