// Challenge:
// Two to One


// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// PREP
// Parameters:
// two strings


// Results:
// string


// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"


// Solution with Psuedo: 

function longest(s1, s2) {
    // turn both strings into arrays
    let array = (s1 + s2).split('');

    // sort array
    array = array.sort()
    console.log(array)

    return [... new Set(array)].join('');

  }

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))