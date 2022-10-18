//Challenge:
//Remove First and Last Character

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



//PREP
//Parameters:
//string >= 2 character

//Results:
//string

//Examples:
// "string" --> "trin"
// "Sir John Harrington" --> "ir John Harringto"
// "Scovfefer" --> "covfefe"

//Solution with Psuedo: 

function removeChar(str){
    //we want to use .slice to cut off the last character of the inputted string, then
    //we use .substring to start the string at index 1, which is the second index in a string.
     return str.slice(0,-1).substring(1)
   };

removeChar("nice colds")