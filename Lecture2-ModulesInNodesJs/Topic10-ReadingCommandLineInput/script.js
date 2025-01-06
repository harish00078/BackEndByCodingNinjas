console.log(
  "Reading command line input AND reading Data from Console or Terminal in Node.js"
);

// Steps we have to Follow:so that we can read command line input or terminal-input in Node.js:

// => Step 1: Importing the 'readline' module from Node.js:
const readline = require("readline");

// => Step 2: Create an (Interface) using readline-module:and then configure that interface to read the data from the console or terminal:
// IMP: for creating (interface):we have to use (createInterface) function of (readline) module:
// Know we have two ways to configure an interface:
// -> first-way: Is that we can directly use simple-functions to configure it:
// -> second-way: Is that we can use the (options) object functions to configure it:
readline.createInterface({
  // V.IMP-NOTE: here (process) refers to the process of the Node.js:Its basically manage by our operating system:and its a global object in Node.js:
  // IMP: (input) property which we create in this object: Is used to read the data from the console or terminal:Its gonna do that with the help of (process.stdin) object:
  // where (process) is a global object in Node.js and (stdin) is a property of that object:which is used to read the data from the console or terminal:or we can say tell node.js to read the (input-data) from the console or terminal:
  input: process.stdin,
  // same thing we do here as well:but here we are gonna write the data to the console or terminal:
  // IMP: (output) property is used to write the data to the console or terminal:Its gonna do that with the help of (process.stdout) object:
  // where (process) is a global object in Node.js and (stdout) is a property of that object:which is used to write the data to the console or terminal:
  output: process.stdout
  



});
