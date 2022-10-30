// Challenge:
// Remove anchor from URL


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// Solution with Psuedo: 

function removeUrlAnchor(url){
    let output = [];
    for (let i = 0; i < url.length; i++) {
        if (url[i] == '#') {
            return output.join('');
        } else {
            output.push(url[i])
        }
    }

    return output.join('')
  }