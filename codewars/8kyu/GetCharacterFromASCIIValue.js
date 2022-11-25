// Challenge:
// get character from ASCII Value


// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/


// PREP
// Parameters:
// number


// Results:
// string


// Examples:
// 55 --> '7'
// 60 --> '<'
// 65 --> 'A'


// Solution with Psuedo: 

function getChar(c){
    return String.fromCharCode(c)
  }