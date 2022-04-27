// Challenge:
// The Wide-Mouthed frog!

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. 
// If this one is an alligator (case-insensitive) return small otherwise return wide



// PREP
// Parameters:
// string

// Results:
// string: "wide" or "small"

// Examples:
// "alligator" --> "small"
// "hippo" --> "wide"
// "frog" --> "wide"

// Solution with Psuedo: 

function mouthSize(animal) {
    // we will use a simple if statement to check if the animal is an alligator
    // we use animal.toLowerCase() to capture any different case styles of "alligator"
    if (animal.toLowerCase() === "alligator"){
        // if the animal is an alligator, return "small"
        return "small"
    } else {
        // if the animal is anything other than an alligator, return "wide"
        return "wide"
    }
  }

mouthSize("ALLIGATOR")