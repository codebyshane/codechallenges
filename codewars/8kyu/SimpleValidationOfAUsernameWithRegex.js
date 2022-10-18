// Challenge:
// Simple Validation of a username with regex

// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).



// PREP
// Parameters:
// string

// Results:
// boolean

// Examples:
// "Hass" --> false
// "asddsa" --> true
// "asd43_34" --> true

// Solution with Psuedo: 

function validateUsr(username) {
    // create a validator that will, from the beginning of the string (^) allow:
    // characters a-z, numbers 0-9, and underscores ([a-z0-9_])
    // it will only accept strings between 4 and 16 acceptable characters ({4,16})
    // end the string after 16 characters ($)
    const validator = /^[a-z0-9_]{4,16}$/;

    return validator.test(username);
  }

validateUsr("asd34_43")