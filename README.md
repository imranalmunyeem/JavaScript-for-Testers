# JavaScript-for-Testers

## Project Setup
           ---> Install nodejs. Recommended:LTS (https://nodejs.org/en/download/)
           
           ---> Download VSCode (https://code.visualstudio.com/download)
           
## How to run 
          ---> node "filename.js"
          
## Variblable types in JavaScript 
          ---> Var ::: 
                      ---> The scope of a var variable is functional scope.
                      ---> It can be updated and re-declared into the scope.
                      ---> It can be declared without initialization.
                      ---> It can be accessed without initialization as its default value is “undefined”.
          
          ---> Let :::
                      ---> The scope of a let variable is block scope. 
                      ---> It can be updated but cannot be re-declared into the scope. 
                      ---> It can be declared without initialization.
                      ---> It cannot be accessed without initialization, as it returns an error.
          
          ---> Constant ::: 
                      ---> The scope of a const variable is block scope. 
                      ---> It cannot be updated or re-declared into the scope.
                      ---> It cannot be declared without initialization. 
                      --->It cannot be accessed without initialization, as it cannot be declared without initialization.

## Conditional (Logical) Operator 
          ---> Logical operators are used to determine the logic between variables or values.
                      ---> &&/and: (x < 10 && y > 1) is true
                      ---> ||/or:  (x == 5 || y == 5) is false
                      ---> !/not:  !(x == y) is true
                      
## Conditional (Ternary) Operator 
          ---> Conditional (Ternary) Operator: JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
                      ---> Syntax: variablename = (condition) ? value1:value2 
                      ---> Example: let voteable = (age < 18) ? "Too young":"Old enough";

## Loops 
          ---> for ::: 
                      ---> loops through a block of code a number of times.
                      ---> for (statement 1; statement 2; statement 3) { // code block to be executed }
                      ---> Statement 1 is executed (one time) before the execution of the code block.
                      ---> Statement 2 defines the condition for executing the code block.
                      ---> Statement 3 is executed (every time) after the code block has been executed.
                      
          ---> for/in :::
                      ---> The JavaScript for in statement loops through the properties of an Object.
                      ---> for (key in object) { // code block to be executed }
                      ---> Do not use for in over an Array if the index order is important. 
                      ---> It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
          
          ---> for/of ::: 
                      ---> The JavaScript for of statement loops through the values of an iterable object. 
                      ---> for (variable of iterable) { // code block to be executed }
                      ---> variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
                      ---> iterable - An object that has iterable properties.
                      ---> For/of is not supported in Internet Explorer.

          ---> while ::: 
                      ---> The while loop loops through a block of code as long as a specified condition is true.
                      ---> while (condition) { // code block to be executed }
                      ---> If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
                     
          ---> do/while :::
                      ---> The do while loop is a variant of the while loop.
                      ---> This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. 
                      ---> do { // code block to be executed } while (condition);
                      ---> It cannot be accessed without initialization, as it returns an error.

## Functions: is a block of code that is designed to perform a task and executed when it is been called or invoked.
          ---> 3 ways to write a function in JavaScript ::: 
                      ---> Function Declaration.
                      ---> Function Expression.
                      ---> Arrow Function.           
          
          ---> Function Declaration :::
                      ---> Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and then parameters. 
                      ---> After defining a function, we call it whenever the function is required.

          ---> Function Expression ::: 
                      ---> Function Expression is another way to define a function in JavaScript. Here we define a function using a variable and store the returned value in that variable. 
                      ---> The whole function is an expression and the returned value is stored in the variable. We use the variable name to call the function.
   
          --->  Arrow Functions ::: 
                      ---> Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.   
