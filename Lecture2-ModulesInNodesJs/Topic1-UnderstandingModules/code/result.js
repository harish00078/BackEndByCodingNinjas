// here we are gonna use those arithmetical-function modules which we have exported from the arithmetic-file using (commonjs) exported-syntax:and gonna get the result from them and print it on the terminal:

// ===>V.V.IMP: here we gonna learn about that:how be (Import) things in (commonjs) modules syntax: acc to its exports or exporting-ways:
// V.V.IMP = Here In (commonjs):we (Import) things with the help of (require) method:
// IMP-NOTE: when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// V.V.IMP(NOTE) = when we (call) or (Import) our (module-functions) which we have created and exported:they represent there selfs as (properties):because of the module.exports object:because we are exporting those functions through the object:

// => V.IMP = Here through (commonjs) syntax we can import the modules in two-ways:It mostly depend on that how we are exporting things:
// => IMP-NOTES:mostly we have Three ways to export things:and how be gonna import them using those two ways of importing:
// NOTE:Two ways of importing works with three ways of exporting:like this:
// => 1 = if we exporting things using (objects):then we use the (first-way) of importing things:
// => 2 = if we exporting things directly with the exporting keyword:then we use the (second-way) of importing things:

// NOTE:These are the three ways of exporting things:
// [first-way] = if we export some thing using (objects):means that assigning our exported things as (properties) or (key-value) to objects:then we have to use the (first-way) to import things:
// [second-way] = if we are directly using them with the (module.exports) keyword then we have to use the (second-way) to import things:
// [third-way] = if we are directly using them with the (exports) keyword then we have also have to use the (second-way) to import things:



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
