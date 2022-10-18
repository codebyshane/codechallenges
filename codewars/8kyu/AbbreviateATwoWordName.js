//Challenge:
//Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


//PREP
//Parameters:
//string

//Results:
//string with abbreviated info

//Examples:
//Steve Smith --> S.S
//Snot Lonstein --> S.N
//Ricky Spanish --> R.S

//Solution with Psuedo:

function abbrevName(name){
    // we want to use split(" ") to break the string into an Array using the space between words as the delimiter
    // we want to store that new array in a new variable
    var nameAsAnArray = name.split(" ");
    // we will use the array[][] to target specific indexes. 
    // [0][0] would target the first item in the array and it's first character.
    // [1][0] would target the second item in the array and it's first character.
    // then we concatenate a "." in the middle using + "" +
    // we will use .toUpperCase() just in case the input is in all lower case.
    return (nameAsAnArray[0][0] + "." + nameAsAnArray[1][0]).toUpperCase();
  }

abbrevName("Shane Ferguson")  