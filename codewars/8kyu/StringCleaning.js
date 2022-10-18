// Challenge:
// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.



// PREP
// Parameters:
// string

// Results:
// string with numbers removed

// Examples:
//see above

// Solution with Psuedo: 

function stringClean(s){
    // we want to remove only numbers in a string, but keep all characters.
    // .replace() wouold be the best bet because we can target specific characters and replace them with nothing ('')
    return s.replace(/[0123456789]/g, '')
  }

stringClean("This looks5 grea8t!")