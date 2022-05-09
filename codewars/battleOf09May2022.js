// Challenge:
// Regex count lowercase letters

// Your task is simply to count the total number of lowercase letters in a string.

// Examples

// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26



// PREP
// Parameters:
// string

// Results:
// integer

// Examples:
// see above

// Solution with Psuedo: 

function lowercaseCount(str){
    // we will use .match() to return an array of regex matches
    // we will check for all matches of lowercase characters with /[a-z]/g
    // in order to avoid an error of running .length on null, we will return an empty array if no matches are found using || [])
    return (str.match(/[a-z]/g) || []).length;
}

lowercaseCount("abcdefghijklmnopqrstuvwxyz")