//Challenge:
// Convert a string to an array
// Write a function to split a string and convert it into an array of words.



//PREP
//Parameters:
// string


//Results:
// array of one word strings

//Examples:
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// "My cat is cuter than your cat" ==> ["My", "cat", "is", "cuter", "than", "your", "cat"]

//Solution with Psuedo: 

// Create a function that intakes a string
function stringToArray(string){
    // we want to split the string based on words, so we use ' ' instead of ''.
    return string.split(' ');
  }
  
  stringToArray('Robin Singh')