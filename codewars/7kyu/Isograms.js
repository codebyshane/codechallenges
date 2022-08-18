// Challenge:
// Isograms


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// Solution with Psuedo: 

function isIsogram(str){
    let array = str.toLowerCase().split('');

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;
  }

console.log(isIsogram("moose"))