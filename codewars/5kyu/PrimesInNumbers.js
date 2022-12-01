// Challenge:
// Primes in numbers


// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


// PREP
// Parameters:
// number


// Results:
// string


// Examples:
// 
// 
// 


// Solution with Psuedo: 

function primeFactors(n){
     //your code here
     let newArr = []
     let obj = {}
     let str = '';
     cal(n);
     function cal(n) {
       if(n > 1) {
         for (let i = 2; i <= n; i++) {
           if (n % i == 0) {
             newArr.push(i);
             cal(n/i);
             return true; //The loop finds one that meets the conditions and terminates the loop 
           }
         }
       }
       else{
         return true;
       }
     }
     newArr.map(function(x){
       obj[x] ? obj[x]++ : obj[x] = 1;
     });

     for (var item in obj) {
       obj[item] == 1 && (str += '('+ item +')')
       obj[item] > 1 && (str += '('+item +'**'+ obj[item]+')')
     }
     return str;
}