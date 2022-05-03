// Challenge:
// Remove First and Last Character Part Two

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL



// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// see above

// Solution with Psuedo: 

function array(arr){
    // lets create a local variable that will hold the trimmed string
    // we will convert the string to an array using .split(','),
    // trim the array to the correct length using .slice(1, -1)
    // then convert the array back to a string with spaces insead of commas - .join(' ')
    let output = arr.split(',').slice(1, -1).join(' ');
    // we will check to verify that output doesn't contain an empty string
    if (output === "") {
        // if output is empty, return NULL
        return null
    } else {
        // for everything else we will then continue to replace all "," with spaces.
        return output
    }
}

array("1,2,3,4")