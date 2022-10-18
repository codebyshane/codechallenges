//Challenge:
//Convert a String to a Number!

//Description

//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


//PREP
//Parameters:
//string

//Results:
//number

//Examples:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//Solution with Psuedo: 

//We want to declare a variable that will hold the function so we could call upon the variable
var stringToNumber = function(str){
    // We use Number() because it is a built in object that takes the argument and returns it as a number
    return Number(str);
  }

 stringToNumber('42') 