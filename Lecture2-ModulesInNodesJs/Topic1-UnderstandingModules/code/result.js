// here we are gonna use those arithametical functions modules:and get the result from them and print it on the terminal:

// V.IMP => first we gonna see that how we can import things which are exported by the CommonJs-based modules:

// V.V.IMP = here we do it with the help of (require) method:
// V.V.IMP(NOTE) = here we can see that. when we are calling our module functions here they are respersenting there selfs as (properties):because of the module.exports object:because we are exporting those functions with in the object:

// we can also do it in two ways:
// V.V.IMP = It mostly depend on that how we are exporting things:
// => 1 = if we are using the (module.exports) object:and assigning our functions as (key-value) pairs or (properties) to it:then we use the first-way here to import things: and also if we are using the (exports) object directly:and assigning our functions as properties to it:then we also have to use the first-way here as well to import things:
// V.IMP-NOTE = if we export some thing as (properties) or (key-value) pairs then we have to use the first-way here to import things:

// => 2 = and if we are using the module.exports object direclty with the functions:and assigning them to it:then we use the second-way here to import things:
// V.IMP-NOTE = if we export some thing as (functions) then we have to use the second-way here to import things:

// [first-way] = first is that we can import the entire file into a variable-name and use it to access our modules or its module-functions:
//(IMP-NOTE) = here we can see that. so when we are importing the same file again:then it did not work because of our module.exports object or method:because when we import our files with this method.then in its first time this file.it basically get stored in the (cache) Method.so that's why when we are importing it again it will not work:because system gonna be still have that same with in him or in its (cache) Method:

const arithameticModules = require("./arithametic");

const arithameticModules1 = require("./arithametic");
console.log(arithameticModules.sum(5,5));
// [second-way] = second is that we can only import the modules direclty that we want to use from the file:

// const sum = require("./arithametic");
// console.log(sum(3,5));