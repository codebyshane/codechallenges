// Challenge:
// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.



// PREP
// Parameters:
// string with a name


// Results:
// string statement


// Examples:
// "Rachael" --> "Rachael plays banjo"
// "Shane" --> "Shane does not play banjo"
// "morty" --> "morty does not play banjo"
// "rick" --> "rick plays banjo"


// Solution with Psuedo:

function areYouPlayingBanjo(name) {
    // we will use .split('') to put each character from the inputted string.
    let nameArr = name.split('');
    // Then we can do a conditional against the first index of the array too check if it is an "R"
    // We will also convert the nameArr to upper case using .toUpperCase(). This will catch everything submitted in lower case.
    if( nameArr[0].toUpperCase() === "R") {
        // if the first letter of the name is "R", they play banjo
        return name + " plays banjo"
    } else {
        // if the first name is anything but an "R", they don't play banjo.
        return name + " does not play banjo"
    }
  }

  areYouPlayingBanjo("Bart")