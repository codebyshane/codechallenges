// Challenge:
// Hello, Name or World!


// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// With `name` = "john"  => return "Hello, John!"
// With `name` = "aliCE" => return "Hello, Alice!"
// With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// PREP
// Parameters:
// string


// Results:
// string


// Examples:
// With `name` = "john"  => return "Hello, John!"
// With `name` = "aliCE" => return "Hello, Alice!"
// With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// Solution with Psuedo: 

function hello(name) {
    if (name == "" || name == null) {
        return "Hello, World!"
    } else {
        name = name.toLowerCase();
        name = name.replace(name[0], name[0].toUpperCase())
        return `Hello, ${name}!`
    }
  }

console.log(hello("johN"))