// here we are gonna use those arithmetical-function modules which we have exported from the arithmetic-file using (commonjs) exported-syntax:and gonna get the result from them and print it on the terminal:

// ===>V.V.IMP: here we gonna learn about that:how be (Import) things in (commonjs) modules syntax: acc to its exports or exporting-ways:
// V.V.IMP-NOTE = Here In (commonjs):we (Import) things with the help of (require) method:
// IMP-NOTE: when we say that:we are importing the all modules at once:it basically means that when we import be are importing the hole-file of our modules:but we are only gonna be able to access the modules from that file which we have exported:
// V.V.IMP(NOTE) = when we (call) or (Import) our (module-functions) which we have created and exported:they are representing there selfs as (properties):because of the module.exports object:because we are exporting those functions through the object:

// => V.IMP = Here through (commonjs) syntax we can import the modules in two-ways:It mostly depend on that how we are exporting things:
// => IMP-NOTES:basically we have two ways of importing things:and three ways to export things in commonjs syntax:so here we gonna learn about that:how we can use those two ways of (imports) with the three-ways of (exports):

// NOTE: These are the three ways of exporting things:
// [first-way] = if we export some thing using (objects) with the module.exports keyword:which means that if we are assigning our exported things as (properties) or (key-value) to the objects:then we have to use the (first-way) to import things:
// [second-way] = if we are directly using them with the (module.exports) keyword then we have to use the (second-way) to import things:
// IMP-NOTE:With in second way of exporting things:we get two types of exports:or we can say that we get the two-different types of export-results through the second-way of exporting things:
// -> 1 = First its exports things like all other-ways:by simply exporting them as (properties) or (key-value) pairs:
// -> 2(V.IMP) = Second it exports thing as they are:[for-example]:if we are exporting the (function):then its gonna be exported them as (function):not as (properties) or (key-value) pairs like we have in in the other-ways:
// [third-way] = if we are directly using them with the (exports) keyword then we also have to use the (second-way) to import things:

// NOTE:It basically a simple distribution:To use two-ways of (imports) on those three-ways of (exports):
// -> if we are using (objects) to export things:or we can say assigning our things as (properties) or (Key-value) pairs to object and then exporting them:In that case we have the (first-way) of importing things:
// -> if we exporting things directly by using (module.exports) and (exports) keyword:then we have use the (second-way) of importing things:
// IMP-NOTE:In second-way of importing things:we have two-type of export-results:so we have to check that if we can use the second-way of (import) on those two types of export-results or not:as we have learn that this case only occur when we are exporting things directly by using (module.exports) keyword:

// Learning About Importing-Ways:
// [first-way] = we use first way of importing things:when we are exporting things using (objects):we have two types to import the things:
// => 1(first-type) = Is that we can import the hole-file:and store it in the variable:and from that variable-name we can access our module functions or other things those we have exported:and access them by using the dot (.) keyword on the variable-name:
const arithmeticModules = require("./arithametic");
console.log(arithmeticModules.add(5, 5));
// => 2(second-type) = Is that we can only import those modules which we want to use from the  exported-file:for doing this basically we need to import the modules using (require) method:and put it in the (object) by using curly braces:
const {Div} = require("./arithametic");
console.log(Div(5,5));
// [second-way] = second is that we can only import the modules directly that we want to use from the file:

//(IMP-NOTE) = here we can see that:so when we are importing the same file again:then it did not work because of our module.exports object or method:because when we import our files with this method.then in its first time this file.it basically get stored in the (cache) Method.so that's why when we are importing it again it will not work:because system gonna be still have that same with in him or in its (cache) Method:

// => First-ways:To types to import modules:

// [first-type]:
// const arithmeticModules = require("./arithmetic");
// [second-type]:
// const { sum, multiple } = require("./arithmetic");

// const arithmeticModules1 = require("./arithmetic");
// console.log(sum(5, 5));
// console.log(multiple(5, 5));

// [second-way]:

// const sum = require("./arithmetic");
// console.log(sum(3,5));
