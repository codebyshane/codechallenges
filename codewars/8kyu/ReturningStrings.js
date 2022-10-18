//Challenge:
//Returning Strings

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//[Make sure you type the exact thing I wrote or the program may not execute properly]


//PREP
//Parameters:
//string

//Results:
//string statement with argument passed in

//Examples:
// "guy" --> "Hello, Shane how are you doing today?"
// "buddy" --> "Hello, Nandor The Relentless how are you doing today?"
// "friend" --> "Hello, Shane how are you doing today?"
// "Nandor The Relentless" --> "Hello, Nandor The Relentless how are you doing today?"


//Solution with Psuedo:

function greet(name){
    //we just need to concatenate the string to have (+ name +) in the appropriate spot.
    return "Hello, " + name + " how are you doing today?"
  }

greet("Nandor The Relentless")