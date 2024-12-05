// here we are gonna use those arithmetical-function modules which we have exported from the arithmetic-file using (commonjs) exported-syntax:and gonna get the result from them and print it on the terminal:

// ===>V.V.IMP: here we gonna learn about that:how be (Import) things in (commonjs) modules syntax: acc to its exports or exporting-ways:
// V.V.IMP-NOTE = Here In (commonjs):we (Import) things with the help of (require) method:
// IMP-NOTE: when we say that:we are importing the all modules at once:it basically means that when we import be are importing the hole-file of our modules:but we are only gonna be able to access the modules from that file which we have exported:
// V.V.IMP(NOTE) = when we (call) or (Import) our (module-functions) which we have created and exported:they are representing there selfs as (properties):because of the module.exports object:because we are exporting those functions through the object:

// => V.IMP = Here through (commonjs) syntax we can import the modules in two-ways:It mostly depend on that how we are exporting things:
// => IMP-NOTES:basically we have two ways of importing things:and three ways to export things in commonjs syntax:so here we gonna learn about that:how we can use those two ways of (imports) with the three-ways of (exports):

// NOTE: These are the three ways of exporting things:
// [first-way] = if we export some thing using (objects) with the module.exports keyword:which means that if we are assigning our exported things as (properties) or (key-value) to the objects:then we have to use the (first-way) to import things:
// [second-way] = if we are directly using them with the (module.exports) keyword then we have to use the (first-way) to import things:only with its (one-type) of export-results we are gonna be able to we use the (second-way) of importing things:  
// IMP-NOTE:With in second way of exporting things:we get two types of exports:or we can say that we get the two-different types of export-results through the second-way of exporting things:
// -> 1 = First its exports things like all other-ways:by simply exporting them as (properties) or (key-value) pairs:
// here we gonna use the (first-way) of importing things same as others:
// -> 2(V.IMP) = Second it exports thing as they are:[for-example]:if we are exporting the (function):then its gonna be exported them as (function):not as (properties) or (key-value) pairs like we have in in the other-ways:
// here we gonna use the (second-way) of importing things:and only with this type of (exports) we are gonna be able to use the (second-way) of importing things:
// [third-way] = if we are directly using them with the (exports) keyword then we also have to use the (first-way) to import things:

// [IMP-NOTE]:- Its basically a simple distribution:To use those two-ways of (imports) on those three-ways of (exports):
// -> [first-way-export]: if we are using (objects) to export things:or we can say assigning our things as (properties) or (Key-value) pairs to object and then exporting them:In that case we have the (first-way) of importing things:
// -> [second and third-way-export]: if we exporting things directly by using (module.exports) and (exports) keyword:then we also use the (first-way) to import things:
// [IMP-NOTE]:because here we are only changing the syntax to export things:but they are gonna be exported through (objects) or as (properties):
// [V.V.IMP-NOTE]:With in the second-way of exporting things:we have two-type of export-results:so the (second-way) of import things are only gonna be used with the (second-type) of (module.exports) exported-results:which means when we export thing as it is they are not gonna be exported as (properties):

// Learning About Importing-Ways:
// [first-way] = here we are using the  first-way of importing things:
// [IMP-NOTE]: It works with the (first),(second) and (third) way of exporting things:
// => 1(first-type) = Is that we can import the hole-file:and store it in the variable:and from that variable-name we can access our module functions or other things those we have exported:and access them by using the dot (.) keyword on the variable-name:

// const arithmeticModules = require("./arithmetic");
// console.log(arithmeticModules.add(5, 5));

// => 2(second-type) = Is that we can only import those modules which we want to use from the  exported-file:for doing this basically we need to import the modules using (require) method:and put it in the (object) by using curly braces:

// const { Div, add } = require("./arithmetic");
// console.log(Div(5, 5));
// console.log(add(5, 25));


// => 1: Checking [first-way] import with [first-way] export:
// -> [first-type-import]:
// const arithmeticModules = require("./arithmetic");
// console.log(arithmeticModules.Add(5, 5));
// -> [second-type-import]:
// const { Add, Div } = require("./arithmetic");
// console.log(Add(5, 5));
// console.log(Div(5, 5));

// => 2: Checking [first-way] import with [second-way] export:
// -> [first-type-import]:
// const arithmeticModules = require("./arithmetic");
// console.log(arithmeticModules.multiple(5, 5));
// -> [second-type-import]:
// const { multiple } = require("./arithmetic");
// console.log(multiple(5, 5));
// => 3: Checking [first-way] import with [third-way] export:
// -> [first-type-import]:
// const arithmeticModules = require("./arithmetic");
// console.log(arithmeticModules.subtraction(125, 5));
// -> [second-type-import]:
// const { subtraction } = require("./arithmetic");
// console.log(subtraction(125, 5));

// [second-way] = Second-way of Importing things:Only works with the (second-type) exported-result of (module.exports) keywords:
// That (second-type) exported-result of (module.exports) keywords are those things which we are exporting directly by using (module.exports) keyword:and have also created those things with there (simple-creating) forms:
// IMP: for-example:if we are creating the function using simple (function) keyword or we can say that the way we create the function in simple-form:then we have to use the (second-way) of importing things:


//(IMP-NOTE) = here we can see that:so when we are importing the same file again:then it did not work because of our module.exports object or method:because when we import our files with this method.then in its first time this file.it basically get stored in the (cache) Method.so that's why when we are importing it again it will not work:because system gonna be still have that same with in him or in its (cache) Method:

