//Challenge:
//Implement a function which convert the given boolean value into its string representation.

//Note: Only valid inputs will be given.


//PREP
//Parameters:
//boolean

//Results:
//string

//Examples:
//true --> "true"
//false --> "false"

//Solution with Psuedo: 

function booleanToString(boo){
    // we will use the built-in javascript object .toString() to convert a non-string value into a string value
    return boo.toString();
  }

booleanToString(true)