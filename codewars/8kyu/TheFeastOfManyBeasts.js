// Challenge:
// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. 
// There is just one rule: the dish must start and end with the same letters as the animal's name. 
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate 
// whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



// PREP
// Parameters:
// two strings

// Results:
// boolean

// Examples:
// ("dog", "deep-fried hotdog") --> true
// ("lion", "lightly-seared ahi tuna") --> false
// ("fish", " fried-fish") --> true

// Solution with Psuedo: 

function feast(beast, dish) {
    // we will target the index of each string so we don't have to code for every possible letter
    // if the first index of the beast (beast.charAt(0)) matches the first index of the dish (dish.charAt(0))
    // To target the last index of a string that we don't know the length of, we use (string.length - 1)
    // if the last index of the beast (beast.charAt(0)) matches the last index of the dish (dish.charAt(0))
    if (beast.charAt(0) === dish.charAt(0) && (beast.charAt(beast.length - 1)) === (dish.charAt(dish.length - 1))){
        // if both first and last characters of the beast string and dish string are the same, return true
        return true;
    } else {
        // if both first and last characters of beast and dish strings DO NOT match, return false
        return false;
    };
};

feast("fish", "fried-fish")