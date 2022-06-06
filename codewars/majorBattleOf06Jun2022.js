// Challenge:
// The Hashtag Generator


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// Solution with Psuedo: 

function generateHashtag (str) {
    // convert string to array of words
    let tag = str.split(' ');
    // capitalize first letter of every word
    for (let i = 0; i < tag.length; i++) {
        tag[i] = tag[i].charAt(0).toUpperCase() + tag[i].substr(1);
    };
    // convert tag back into a string
    // It must start with a hashtag (#).
    let hashTag = `#${tag.join('')}`;
    // If the input or the result is an empty string it must return false.
    // If the final result is longer than 140 chars it must return false.
    if (str == "" || hashTag.length > 140 || hashTag == "#") {
        return false;
    } else {
    return hashTag;
    }
}

generateHashtag("codeWars")