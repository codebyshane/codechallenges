// Challenge:
// Regexp Basics - is it a digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.



// PREP
// Parameters:
// string, integers, boolean

// Results:
// boolean

// Examples:
// 
//
//

// Solution with Psuedo: 

String.prototype.digit = function() {
    // we will use .test() to return a boolean
    // we will search from the input beginning ^, look for digits \d, to the end of the input $.
    // we will look for every instance by having /g
    return /^\d$/g.test(this);
  };

