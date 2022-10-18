// Challenge:
// Palindrome Strings

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.



// PREP
// Parameters:
// string
// number

// Results:
// boolean

// Examples:
// "anna" --> true
// "teddy" --> false
// 12321 --> true

// Solution with Psuedo: 

function isPalindrome(line) {
    // we need to convert any numbers to strings, so we need a variable to store the conversion
    // .toString() will convert any non-string into a string
    // .toLowerCase() will convert everything to lower-case. This will make the function case-insensitive
    // .replace(/\s/g, '') will remove all whitespace in a string and replace it with nothing. This makes everything one word, lower-case, and a string
    let string = line.toString().toLowerCase().replace(/\s/g, '');
    // we need to make a variable to hold the reversed string. This will make the later if conditional easier.
    // .split('') will break up the new string variable into an array based on characters
    // .reverse() will reverse the order of the array we just created
    // .join('') will convert the array that we reversed intoa string again. This effectively reverses the string variable we created.
    let palindrome = string.split('').reverse().join('');

    // now we can run an if conditional statement to verify if the argument provided is a palindrome
    // since a palindrome is the same forward and backwards, we can set the conditional to compare if the string variable and palindrome variable are the same.
    if (string === palindrome) {
        return true
    } else{
        return false
    }
  }

isPalindrome("Red roses run no risk sir on Nurses order")