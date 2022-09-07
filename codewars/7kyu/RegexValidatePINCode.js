// Challenge:
// Regex validate PIN code


// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// Solution with Psuedo: 

function validatePIN (pin) {
    return pin.length > 3 && pin.length < 7 && pin.length !== 5 && !pin.match(/\D/)
  }

console.log(validatePIN("1245"))