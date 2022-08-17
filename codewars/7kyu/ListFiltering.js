// Challenge:
// List Filtering


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// PREP
// Parameters:
// array


// Results:
// array


// Examples:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// Solution with Psuedo: 

function filter_list(l) {
    let filteredList = [];
    for (let i = 0; i < l.length; i++) {
        if (l[i] === Number(l[i])) {
            filteredList.push(l[i]);
        }
    }

    return filteredList;
  }

console.log(filter_list([1,2,'a','b']))