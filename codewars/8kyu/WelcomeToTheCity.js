// Challenge:
// Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. 
// Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!



// PREP
// Parameters:
// array of strings
// string

// Results:
// string

// Examples:
// (['John', 'Smith'], 'Phoenix', 'Arizona') --> "Hello, John Smith! Welcome to Phoenix, Arizona!"
// (['Cleveland', 'Brown'], 'Stoolbend', 'Virginia') --> "Hello, Cleveland Brown! Welcome to Stoolbend, Virginia!"
// (['Guy', 'Fieri'], 'Flavortown', 'America') --> "Hello, Guy Fieri! Welcome to Flavortown, America!"

// Solution with Psuedo: 

function sayHello( name, city, state ) {
    // the only thing we need to remember is that name is an array of strings so we need to convert it to a single string. use .join(' ')
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

sayHello(['Cleveland', 'Brown'], 'Stoolbend', 'Virginia');