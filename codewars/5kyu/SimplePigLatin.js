// Challenge:
// Simple Pig Latin


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// pigIt('Bacon is made from what ?!');     // aconBay siay ademay romfay hatway ?!


// Solution with Psuedo: 

function pigIt(str){
    const strArr = str.split(' ');
    console.log(strArr);

    for (let i = 0; i < strArr.length - 1; i++) {
      let word = strArr[i].split('');
      console.log(word);

      
    }
  }

pigIt('Bacon is made from what ?!')