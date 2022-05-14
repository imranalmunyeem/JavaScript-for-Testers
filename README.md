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

          
