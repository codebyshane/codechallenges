// Challenge:
// Beginner Series #1 School Paperwork


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!


// PREP
// Parameters:
// two numbers

// Results:
// number

// Examples:
// n= 5, m=5: 25
// n=-5, m=5:  0
// n= 6, m=10:  60


// Solution with Psuedo: 

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m
    }
}