// Challenge:
// Remove the time

// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".



// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// "Friday May 2, 7pm" --> "Friday May 2"
// "Thursday April 15, 11am" --> "Thursday April 15"
// "Monday February 29, 12am" --> "Monday February 29"

// Solution with Psuedo: 

function shortenToDate(longDate) {
    // first let's convert the string to an array with the comma as the delimiter using .split(',')
    // then lets remove the last element of the array using .splice(0, 1)
    // finally we will convert the altered array into a string
    return longDate.split(',').splice(0, 1).join(' ')
  }

shortenToDate("Monday February 29, 12am")