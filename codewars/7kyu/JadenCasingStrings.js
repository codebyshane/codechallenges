// Challenge:
// Jaden Casing Strings


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org


// PREP
// Parameters:
// string


// Results:
// string with first letter of every word capitalized


// Examples:
// "How can mirrors be real if our eyes aren't real" --> "How Can Mirrors Be Real If Our Eyes Aren't Real"
// "Why do politicians lie and then get re-elected" --> "Why Do Politicians Lie And Then Still Get Re-elected"
// "How much wood could a woodchuck chuck" --> "How Much Wood Could A Woodchuck Chuck"


// Solution with Psuedo: 

String.prototype.toJadenCase = function () {
    // turn string into an array of words where ' ' is the delimeter
    // map the words so the first index of each word is capitalized
    // replace the first letter of each word with the capital letter
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  };

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())