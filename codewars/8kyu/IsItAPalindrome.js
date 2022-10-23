// Challenge:
// Is it a palindrome?


// Write a function that checks if a given string (case insensitive) is a palindrome.


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// "racecar" --> true
// "a man a plan a canal panama" --> true
// "example" --> false


// Solution with Psuedo:

function isPalindrome(x) {
    return (x.toLowerCase().split('').reverse('').join('') === x.toLowerCase())
  }