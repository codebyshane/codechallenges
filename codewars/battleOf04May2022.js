// Challenge:
// Reversing Words in a String

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"


// Happy coding!



// PREP
// Parameters:
// string

// Results:
// string reversed

// Examples:
// "May the 4th be with you" --> "you with be 4th the May"
// "I find your lack of faith disturbing" --> "disturbing faith of lack your find I"
// "I'm taking this couch" --> "couch this taking I'm"

// Solution with Psuedo: 

function reverse(string){
    // we should convert the string to an array using .split(' '),
    // then reverse the order of the array using .reverse(),
    // then convert the reversed array back into a string with spaces between the values using .join(' ')
    return string.split(' ').reverse().join(' ');
  }

reverse("I hate sand")