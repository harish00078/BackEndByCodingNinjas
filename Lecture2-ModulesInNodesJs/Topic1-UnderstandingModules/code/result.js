// here we are gonna use those arithametical functions modules:and get the result from them and print it on the terminal:

// V.IMP => first we gonna see that how we can import things which are exported by the CommonJs-based modules:

// V.V.IMP = here we do it with the help of (require) method:
// V.V.IMP(NOTE) = here we can see that. when we are calling our module functions here they are respersenting there selfs as (properties):because of the module.exports object:because we are exporting those functions with in the object:

// we can also do it in two ways:
// 1 = first is that we can import the entire file into a variable-name and use it to access our modules or its module-functions:

// const arithameticModules = require('./arithametic');

// 2 = second is that we can only import the modules direclty that we want to use from the file:
// const {div,sum} = require('./arithametic');
const  = require("./arithametic");

console.log(add(9, 40));
console.log(sum(9, 5));
