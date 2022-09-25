// Challenge:
// Break camelCase


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// Solution with Psuedo: 

function solution(string) {
    string = string.split('');
    let subString;

    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i].toUpperCase()) {
            string[i] = " "+string[i];
        }
    }

    return string.join('')
}

console.log(solution('camelCasing'))