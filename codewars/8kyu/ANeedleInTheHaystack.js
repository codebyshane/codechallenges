// Challenge:
// A Needle in the Haystack


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"


// PREP
// Parameters:
// array of strings

// Results:
// string 

// Examples:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// ["hay", "junk", "hay", "hay", "moreJunk", "randomJunk", "needle"] --> "found the needle at position 6"
// ["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"] --> "found the needle at position 3"


// Solution with Psuedo: 

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`
        }
    }
  }

console.log(findNeedle(["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"]));