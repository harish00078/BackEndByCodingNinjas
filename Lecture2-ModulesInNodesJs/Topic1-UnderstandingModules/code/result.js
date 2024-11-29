// here we are gonna use those arithmetical-function modules which we have exported from the arithmetic-file using (commonjs) exported-syntax:and gonna get the result from them and print it on the terminal:

// ===>V.V.IMP: here we gonna learn about that:how be (Import) things in (commonjs) modules syntax: acc to its exports or exporting-ways:
// V.V.IMP = Here In (commonjs):we (Import) things with the help of (require) method:
// IMP-NOTE: when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// V.V.IMP(NOTE) = here we can see that: when we are (calling) or (Importing) our (module-functions) which we have created:then they are representing there selfs as (properties):because of the module.exports object:because we are exporting those functions through the object:

// => V.IMP = Here through (commonjs) syntax we can import the modules in two ways:It mostly depend on that how we are exporting things:
// => IMP-NOTES:if we export some thing using (object):and assigning them as (properties) or (key-value) pairs then we have to use the (first-way) to import things:and if we are directly using them with the (module.exports) or (exports) keyword then we have to use the (second-way) to import things:

// => [first-way]:(Explanation):In first way.we have one types to export the things:
// -> [1-type]: first is that using the default export syntax of commonjs:and that is (module.exports) object:
// -> if we are using the (module.exports) object:and assigning our functions as (key-value) pairs or (properties) to it:then we use the first-way here to import things: 
// -> [2-type]:second is that simply using the (exports) keyword:and that is (exports) object: 
// -> if we are using the (exports) keyword directly:and assigning our functions as properties to it:then we also have to use the first-way here as well to import things:

// => [second-way]:(explanation):In second way.we have two types to export the things:
// -> [1-type]:assigning our functions or anything directly with the default (module.exports) keyword:
// => 1 = In this type: if we are using the module.exports object directly with the functions:and assigning them to it:then we use the second-way here to import things:
// =
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
