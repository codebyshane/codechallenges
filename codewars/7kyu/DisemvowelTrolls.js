// Challenge:
// Disemvowel Trolls


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "This website is for losers LOL!" --> "Ths wbst s fr lsrs LL!"
// "No offense but,\nYour writing is among the worst I've ever read" --> "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// "What are you, a communist?" --> "Wht r y,  cmmnst?"


// Solution with Psuedo: 

function disemvowel(str) {
    let output = ""
    const vowels = "aeiou"

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) continue;
        output += str[i]
    }

    return output;
  }

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))