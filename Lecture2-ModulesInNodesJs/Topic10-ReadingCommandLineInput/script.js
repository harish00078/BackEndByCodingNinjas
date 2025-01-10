console.log(
  "Reading command line input AND reading Data from Console or Terminal in Node.js"
);

// Steps we have to Follow:so that we can read command line input or terminal-input in Node.js:

// => Step-1: Importing the 'readline' module from Node.js:
const readline = require("readline");

// => Step-2: Create an (Interface) using readline-module:and then configure that interface to input and output the data from the console or terminal:
// IMP: for creating (interface):we have to use (createInterface) function of (readline) module:
// IMP-NOTE:this createInterface function is gonna return an object:which is gonna represent the interface:so we have to store that object or interface-object in a variable:
// V.IMP-NOTE:the (createInterface) function help us to connect with the (console or terminal):it basically help us to fetch or response back the data to the console or terminal:
// Know we have two ways to configure an interface:
// -> first-way: Is that we can directly use simple-functions of (createInterface) function to configure it:
// -> second-way: Is that we can use the (options) object-functions of (createInterface) function to configure it:
// IMP: Using the second-way:
const interface = readline.createInterface({
  // V.IMP-NOTE: here (process) refers to the process of the Node.js:Its basically manage by our operating system:and its a global object in Node.js:
  // IMP: (input) property which we create in this object: Is used to read the data from the console or terminal:Its gonna do that with the help of (process.stdin) object:
  // where (process) is a global object in Node.js and (stdin) is a property of that object:which is used to read the data from the console or terminal:or we can say tell node.js to read the (input-data) from the console or terminal:
  input: process.stdin,
  // same thing we do here as well:but here we are gonna write the data to the console or terminal:
  // IMP: (output) property is used to write the data to the console or terminal:Its gonna do that with the help of (process.stdout) object:
  // where (process) is a global object in Node.js and (stdout) is a property of that object:which is used to write the data to the console or terminal:
  output: process.stdout,
});

// => Step-3: know that interface-object:we get from the (createInterface) function:this interface-object has functions with in it: through which we can read and write the data to the console or terminal:
// because we have configured that object to get the input or output data from the console or terminal:with the help of it we can read and write the data to the console or terminal:which has been written by the user:

// IMP: So here first we have to (read) the data from the console or terminal:or which has been provided by the user:
// IMP-NOTE: we gonna do that with the help of (question) function of the interface-object:
// V.IMP-NOTE:the (question) function basically help us to (reads) the data:through the help of (interface-object)'s (input) property:which is gonna get the data from the console or terminal:

// => this function takes three arguments:
// => first-argument: is the (question) which we want to ask the user:or which we want to display to the users:So acc to that they can gave us there inputs:
// IMP: we display the (question) to the (user):In the form of (string):so first argument is a string:

// => second-argument: Is the (callback-function):which is gonna get executed or triggered when the user provide the (input) or (response-back) to the question:because we it:we are gonna be able to access the (user) input through the argument which we gave to the (callback-function):as we have learned it in the (js):
// IMP: with the help of this (callback-function):we can get the (input) or (response-back) from the user:which they provide to the question:

// V.V.IMP-NOTE:so after receiving (firstNumber):through callback:we can ask the secondNumber to the user:by doing the same thing again:which we call as (chaining) or (callback-functions or functions) chaining in Node.js or JavaScript:
// V.IMP:While asking the second-question of input:we again have to use the (interface-object):which has been provided by the (createInterface) function:so that we can use the (question) function of that object:to ask the second-question to the user:
// -> Write the another (string) or (question) to the (user)with in that (firstNumber's) callback-function:
// -> And this (secondNumber) also gonna have its own callback-function To store the number or input into its(argument):and after that we can perform the operations on them:

interface.question("Enter First Number:", (firstNumber) => {
  // IMP:callback function chaining:To get the second-input from the (user):
  interface.question("Enter Second Number:", (secondNumber) => {
    // Here we have the access to firstNumber and secondNumber:
    // IMP:As we have learned in the (js):we are able to do the function-chaining in the (js):because of the (closures):
    const sum = Number(firstNumber) + Number(secondNumber);
    console.log(`The sum of two numbers is: ${sum}`);
  });
});
