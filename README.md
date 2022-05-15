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
        
## NPM: 
          ---> NPM or "Node Package Manager" – is the default package manager for JavaScript's runtime Node. js 
          ---> NPM consists of 2 main parts ::: 
                      ---> a CLI (command-line interface) tool for publishing and downloading packages. 
                      ---> An online repository that hosts JavaScript packages.  
          ---> We use NPM to install packages. For example: npm install <package name> 
          
## Yarn: 
          ---> Yarn is a JavaScript package manager created by Facebook. 
          ---> Yarn stands for Yet Another Resource Negotiator.
          --->  It provides similar functionalities as NPM. It is an alternative to NPM when installing, uninstalling, and managing package dependencies from the NPM registry or GitHub repositories. 
          ---> To use Yarn, you have to install it separately by yourself. You should install Node.js to use Yarn.
          ---> To install Yarn run this command, "npm install yarn -- global" This will install Yarn globally so that you can run it from any directory you’d like.
          ---> We use Yarn to install packages. For example: yarn add <package name> 
          
## package.json: 
          ---> A package.json is a JSON file that exists at the root of a Javascript/Node project.
          ---> It holds metadata relevant to the project and it is used for managing the project’s dependencies, scripts, version and a whole lot more.
          ---> There are two ways of creating/generating a package.json file :::     
                       ---> npm init 
                       ---> yarn init
                       ---> npm init -y or yarn init -y to generate the package.json file with default values.
                       
## NPX: 
          ---> NPX is an NPM package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM. 
          ---> When you run a package using NPX, it searches for the package in the local and global registry, and then it runs the package.  
          ---> If the package is not already installed, NPX downloads the package files and installs the package, but it will only cache the files instead of saving it.                        
          ---> To run package using NPX :::     
                       ---> npx <package name>
                       
## JS Test Frameworks & Assertion Libraries: 
          ---> Jest, Mocha, Storybook, Cypress, Enzyme, AVA, Jasmine, Puppeteer.                      
