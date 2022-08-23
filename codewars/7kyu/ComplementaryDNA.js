// Challenge:
// Complementary DNA


// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"



// Solution with Psuedo: 

function DNAStrand(dna){
    // turn input string into an array
    let input = dna.split('');

    // define output array
    let output = [];

    // loop through array
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'A') {
            output.push('T')
        } else if (input[i] === 'T') {
            output.push('A')
        } else if (input[i] === 'C') {
            output.push('G')
        } else {
            output.push('C');
        }
    }

    // return output array as string
    return output.join('');
  }

console.log(DNAStrand("ATTGC"))