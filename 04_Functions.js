//------------------------Function Declaration-------------------------------//
// Function declaration
function add(a, b) {        
    console.log(a + b);
}
 
// Calling a function
add(2, 3);

//------------------------Function Expression-------------------------------//

// Function Expression
const add = function(a, b) {
    console.log(a+b);
}
 
// Calling function
add(2, 3);

//------------------------------Arrow-----------------------------------//

// Single line of code
let add1 = (a, b) => a + b;
 
console.log(add1(3, 2));