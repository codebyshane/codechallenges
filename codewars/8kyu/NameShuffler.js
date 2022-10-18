// Challenge:
// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.



// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// "Mel Brooks" --> "Brooks Mel"
// "Slim Pickens" --> "Pickens Slim"
// "Cleavon Little" --> "Little Cleavon"

// Solution with Psuedo: 

function nameShuffler(str){
    // we will convert the string into an array, reverse the order of the array, then convert the reversed array back to a string
    return str.split(' ').reverse().join(' ');
  }

nameShuffler("Heady Lamar")