// Challenge:
// Write Number in Expanded Form


// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


// PREP
// Parameters:
// number


// Results:
// string


// Examples:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


// Solution with Psuedo: 

function expandedForm(num) {
    let subNumArr = []
    let numStr = num.toString()

    for (let i = 0; i < numStr.length; i++){
        let zeroCount = numStr.length - i - 1
        let x = 0
        let subNum = numStr[i]

        if(numStr[i] !== '0'){
            while (x < zeroCount) {
                subNum = subNum + '0'
                x++
            }
            subNumArr.push(subNum)
        }
    }
    return subNumArr.join(' + ')
  }