// here we are gonna use those arithmetical functions modules:and get the result from them and print it on the terminal:

// ===> here we gonna learn about:how to use the (commonjs-modules) method exports:

// V.V.IMP = here we do it with the help of (require) method:
// IMP-NOTE: when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// V.V.IMP(NOTE) = here we can see that. when we are calling our module functions they are representing there selfs as (properties):because of the module.exports object:because we are exporting those functions with in the object:

// we can also do it in two ways:
// V.V.IMP = It mostly depend on that how we are exporting things:
// => 1 = if we are using the (module.exports) object:and assigning our functions as (key-value) pairs or (properties) to it:then we use the first-way here to import things: and also if we are using the (exports) object directly:and assigning our functions as properties to it:then we also have to use the first-way here as well to import things:
// V.IMP-NOTE = if we export some thing as (properties) or (key-value) pairs then we have to use the first-way here to import things:

// => 2 = and if we are using the module.exports object directly with the functions:and assigning them to it:then we use the second-way here to import things:
// V.IMP-NOTE = if we export some thing as (functions) then we have to use the second-way here to import things:

// [first-way] = In first way.we have two types to import the things:
// => 1 =  first is that we can import the hole-file:and store it in the variable:and from that variable-name we can access our module functions or other things those we have exported:and access them by using the dot (.) keyword on the variable-name:
// => 2 = second way is that we can only import those modules which we want to use from the  exported-file:for doing this basically we need to import the modules using (require) method:and put it in the (object) by using curly braces:

//(IMP-NOTE) = here we can see that. so when we are importing the same file again:then it did not work because of our module.exports object or method:because when we import our files with this method.then in its first time this file.it basically get stored in the (cache) Method.so that's why when we are importing it again it will not work:because system gonna be still have that same with in him or in its (cache) Method:

// => First-ways:To types to import modules:

// [first-type]:
// const arithmeticModules = require("./arithmetic");
// [second-type]:
// const { sum, multiple } = require("./arithmetic");

// const arithmeticModules1 = require("./arithmetic");
// console.log(sum(5, 5));
// console.log(multiple(5, 5));

// [second-way] = second is that we can only import the modules directly that we want to use from the file:

// const sum = require("./arithmetic");
// console.log(sum(3,5));
