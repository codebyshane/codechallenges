// Challenge:
// Regex Password Validation


// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// 'fjd3IR9' --> true
// 'ghdfj32' --> false
// '4fdg5Fj3' --> true


// Solution with Psuedo: 

// assign your RegExp to REGEXP
const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;