// Challenge:
// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



// PREP
// Parameters:
// array of words

// Results:
// string of words with no spaces at beginning or end

// Examples:
// ["This", "record", "is", "scratched", ",", "I", "will", "not", "buy", "it"] --> "This record is scratched, I will not buy it"
// ["This", "is", "an", "ex-parrot"] --> "This is an ex parrot"
// ["I", "DON'T", "LIKE", "SPAM"] --> "I DON'T LIKE SPAM"

// Solution with Psuedo: 

function smash (words) {
    // We will use .join(' ') to join the array into a string with a space(' ') separating them.
    return words.join(' ');
 };

smash(["This", "record", "is", "scratched", ",", "I", "will", "not", "buy", "it"]) 