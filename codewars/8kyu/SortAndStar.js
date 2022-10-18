// Challenge:
// Sort and Star

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.



// PREP
// Parameters:
// array of strings

// Results:
// string

// Examples:
// ["We", "Are", "The", "Champions"] --> ["Are", "Champions", "The", "We"] --> "A***r***e"
// ["You", "Can", "Get", "Anything", "You", "Want", "At", "Alice's", "Restaurant"] --> ["Alice's", "Anything", "At", "Can", "Get", "Restaurant", "Want", "You", "You"] --> "A***l***i***c***e***'***s"
// ["Bird", "Is", "The", "Word"] --> ["Bird", "Is", "The", "Word"] --> "B***i***r***d"

// Solution with Psuedo: 

function twoSort(s) {
    // declare a variable to hold the sorted array
    let sSorted = s.sort();
    // return the sorted array at index 0, split between each character, then join back into a string with "***" as the delimiter
    return sSorted[0].split("").join("***");
}

twoSort(["Bird", "Is", "The", "Word"])