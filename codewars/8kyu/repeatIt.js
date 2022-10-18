// Challenge:
// repeatIt

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example

// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"



// PREP
// Parameters:
// string
// integer

// Results:
// string repeated integer times

// Examples:
// ("Hi", 2) --> "HiHi"
// (1234, 5) --> "Not a string"
// ("Alright", 3) --> "AlrightAlrightAlright"

// Solution with Psuedo: 

var repeatIt = function(str, n) {
    // convert str to string so we can check if the parameter is in fact a string
    if (str === str.toString()) {
        // if str is a string, return the string n times
        return str.repeat(n)
    } else {
        // if str is anything but a string, return "Not a string"
        return "Not a string"
    }
}

repeatIt("Yo", 3)