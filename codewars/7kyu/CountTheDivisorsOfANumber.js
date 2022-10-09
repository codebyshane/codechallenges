// Challenge:
// Count the divisors of a number


// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


// PREP
// Parameters:
// number


// Results:
// number


// Examples:
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)


// Solution with Psuedo: 

function getDivisorsCnt(n){
    let divisorCount = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisorCount += 1
        }
    }
    return divisorCount;
}

console.log(getDivisorsCnt(5))