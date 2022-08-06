// Challenge:
// Vowel Count


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// PREP
// Parameters:
// string


// Results:
// number


// Examples:
// Hello world --> 3
// Great Scott --> 3
// What is the airspeed velocity of an unladen swallow? --> 17

// Solution with Psuedo: 

function getCount(str) {
    let count = 0;
    str = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"]

    for (let letters of str) {
        if (vowels.includes(letters)) {
            count++;
        }
    }

    return count;
  }

console.log(getCount("What is the airspeed velocity of an unladen swallow?"))