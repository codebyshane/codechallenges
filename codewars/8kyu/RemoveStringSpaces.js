//Challenge:
//Remove String Spaces

//Simple, remove the spaces from the string, then return the resultant string.


//PREP
//Parameters:
//string

//Results:
//string with no spaces

//Examples:
//"Java Script" --> "JavaScript"
//"3 2 1" --> "321"
//"a man a plan a canal panama" --> "amanaplanacanalpanama"

//Solution with Psuedo: 

function noSpace(str){
    // we want to target all instances of whitespace using (/\s), and replace them muliple times using (/g). 
    // Without the (/) on both expressions, we would only target the first instance.
    // Without (/g) it would only target the first instance of whitespace.
    // We then want to replace the whitespaces with '', essentially nothing.
    return str.replace(/\s/g, '')
}

noSpace("Java Script")