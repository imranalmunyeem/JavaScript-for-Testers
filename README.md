# JavaScript-for-Testers

## What is JavaScript?
           ---> JavaScript is a scripting or programming language that allows you to implement complex features on web pages.
           
           ---> We use JavaScript to manipulate dom to make webpages more interactive, live.


## What is NodeJS?
           ---> Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).
           
           ---> Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. 
           
           ---> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
           
           ---> Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.    
           
           ---> Node.js = Runtime Environment + JavaScript Library
           
           ---> Features of NodeJS ::: 
                      ---> Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
                      
                      ---> Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
                      
                      ---> Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
                      
                      ---> No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.
                      
                      ---> License − Node.js is released under the MIT license   


## Where not to use NodeJs?
           ---> It is not advisable to use Node.js for CPU intensive applications. Because it is single threaded.


## Client Side VS Server Side:
           ---> Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.
           
           ---> The main tasks of Client side JavaScript are validating input, animation, manipulating UI elements, applying styles, some calculations are done when you don't want the page to refresh so often.
           
           ---> Client side code is restricted to the clients machine resources, in terms of computing power and permissions. For example client-side javascript can't access the clients hard disk.
           
           ---> Client side does not provide security for data.
           
           ---> Server side you can access server hard disk without any problem.
           
           ---> The primary advantage to server-side scripting is the ability to highly customize the response based on the user's requirements, access rights, or queries into data stores.
           
           ---> Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
           
           ---> Server side provides security for data.
           
           ---> Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET.
           
           ---> JavaScript can also be used as a server-side language, for example in the popular Node.js environment.
 
 
## Installation & Setup:
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


## Promises & Then in JavaScript:
           ---> The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
           
           ---> Previously, callback functions were used instead of this function which made the code difficult to maintain.
           
           ---> Syntax :::
                      ---> p.then(onFulfilled[, onRejected]);
                      --->       p.then(value => {
                      --->        // fulfillment
                      --->       }, reason => {
                      ---->      // rejection
                      ---->                  });
                      
          ---> OnFulfilled ::: 
                      ---> A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value. If it is not a function, it is internally replaced with an "Identity" function (it returns the received argument).
                      
          ---> OnRejected ::: 
                      ---> A Function called if the Promise is rejected. This function has one argument, the rejection reason. If it is not a function, it is internally replaced with a "Thrower" function (it throws an error it received as argument).
                      
          ---> Note :::
                      ---> If one or both arguments are omitted or are provided non-functions, then then will be missing the handler(s), but will not generate any errors. If the Promise that then is called on adopts a state (fulfillment or rejection) for which then has no handler, the returned promise adopts the final state of the original Promise on which then was called.
                      

## Synchronous & Asynchronous types in JavaScript 
          ---> Synchronous ::: 
                      ---> Synchronous means to be in a sequence.
                      
                      ---> Every statement of the code gets executed one by one.
                      
                      ---> So, basically a statement has to wait for the earlier statement to get executed.
                      
          ---> Asynchronous :::
                      ---> Asynchronous means to be in a non-sequence. 
                      
                      ---> Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. 
                      
                      ---> This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.                   
                      
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
