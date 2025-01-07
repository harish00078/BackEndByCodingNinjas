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
  output: process.stdout




});


// => Step-3: know that interface-object:we get from the (createInterface) function:this interface-object has functions with in it: through which we can read and write the data to the console or terminal:
// because we have configured that object to get the input or output data from the console or terminal:with the help of it we can read and write the data to the console or terminal:which has been written by the user:

// IMP: so here first we have to (read) the data from the console or terminal:or which has been provided by the user:
// IMP-NOTE: we gonna do that with the help of (question) function of the interface-object:
// V.IMP-NOTE:the (question) function basically help us to (reads) and (writes) the data to the console or terminal:with the help of the (interface-object)'s (input) and (output) properties:
// => this function is gonna take three arguments:

interface.question()



