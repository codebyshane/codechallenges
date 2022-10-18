// Challenge:
// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.



// PREP
// Parameters:


// Results:


// Examples:
// "http://github.com/carbonfive/raygun" -> "github"
// "http://www.zombie-bites.com"         -> "zombie-bites"
// "https://www.cnet.com"                -> "cnet"


// Solution with Psuedo:

function domainName(url){
    // to make things easier, we will create a variable that will remove 'https://', 'http://', and 'www.' from the urls.
    // we will then conver to an array with .split() using /, ?, and # as delimiters
    let longDomain = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0]
    // we will assign whatever is in the 0 index to the domain variable
    let domain = longDomain.split('.')[0];
    return domain;
  }

domainName("https://www.cnet.com")