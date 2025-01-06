console.log("Reading command line input AND reading Data from Console or Terminal in Node.js");

// Steps we have to Follow:so that we can read command line input or terminal-input in Node.js:

// => Step 1: Importing the 'readline' module from Node.js:
const readline = require('readline');

// => Step 2: Create an (Interface) using readline-module:and then configure that interface to read the data from the console or terminal:
// IMP: for creating (interface):we have to use (createInterface) function of (readline) module:
// Know we have two ways to configure an interface:
// -> first-way: Is that we can directly use functions to configure it:
// -> second-way: Is that we can use the (options) object functions to configure it:
readline.createInterface()
