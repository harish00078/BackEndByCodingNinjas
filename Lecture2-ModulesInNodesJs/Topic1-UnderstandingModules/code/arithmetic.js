// here we gonna see that:how Modules are help full in Nodejs:

// Modules help us to do two and more things:
// => first =  using modules we can share our code.or we can say that the particular section of our code-file from one-file to another-file:with the help of modules we can use something on the other files which we have created on the one particular file:
// => Secondly = V.V.IMP(Note)= In Node.js, with the help of modules, we are able to connect our code or its multiple files:within one file and that one file is basically connected to our main app-file or server-file:We can also connect those files one by one with the main server-file. Instead of combining them first into one file:this is how we connect multiple files with in our Node.js or server application:same thing we do with in the front-end section library (react)  application as well:
// => third = V.V.IMP(NOTE):modules syntax allows us to import built-in modules (like 'fs' for file system operations) and other libraries that we can install into our application using Node.js environment. This enables us to access and use them in our application files:

// IMP => we have two ways to do that:these are not types they are the ways that how we can have or create modules and access them after that:
// V.V.IMP = we have two diff syntaxes to create modules in nodejs:
// -> 1 = CommonJs Module syntax:
// -> 2 = ES6 Module syntax:

// ===> In this Topic-file we will specifically gonna be learn about (CommonJs Module syntax):

// => first = here we see that how we can do that with the help of (commonjs) modules syntax or method:
// for that here we gonna create the two arithmetic functions:both of these arithmetic functions gonna get the same type of (argument) variables:

// function sum(x, y) {
//   return x + y;
// }

// function div(x, y) {
//   return x / y;
// }

// V.V.IMP: In commonjs modules method or syntax way we use (module.exports) keywords with (object) or without the (object) to (export) things:we use them according to how many of things we want to export:same thing we do with in the (ES6-module-syntax) as well:

// V.V.IMP(NOTE):CommonJs basically uses a (object) to (export) things that's why it receives or have a (object) with in it:In which we assign our function,variables,or anything that we want to export from our file:

// IMP(NOTE): And that's why its gonna be export them as (key-value) pairs or (Properties):same thing that we have with in the simple-objects:

// => CommonJs Module:CommonJS is the (default) module-system in Node.js which uses the (require) function to import-modules and the (module.exports) object to export them:
// V.IMP-NOTE = here these functions gonna be exports as properties because of the (object) usage:and we have also already know that if we export (functions) as properties then those (functions) become's (methods):

// V.IMP(NOTE)=> we can also use (module.exports) or (commonjs-export) syntax in (three) and more ways:but the most common once are these three ways:
// -> 1 => use (module.exports) keywords with the help of (objects):
// -> 2 => use (module.exports) keywords without the help of (objects):
// -> 3 => use only (exports) keyword with the help of (objects) and without (objects):

// => [first-way]:Is with the help of (objects):with in this first-way:we also have the multiple ways do it as well:mainly its in two-ways:

// -> [1-first] == is that we can do it as key-value pairs by providing (keys) to our functions:with in the module.exports object:

// module.exports = {
//   Add: sum,
//   Div: div,
// };

// -> [2-second] = Is that we can simply provide our created-functions and other things as it is they are as keys or values we can say with in the module.exports object:and they will automatically becomes the (key-value) pairs by there self:

// module.exports = {
//   sum,
//   div,
// };

// =>[second-way]:In the second-way:we do it without the (objects):we also have the multiple ways here to do it as well:
//V.V.IMP(NOTE) = here we gonna see that how we can use the (commonjs-modules) export syntax or method directly with the functions and others things as well:
// V.IMP = here we are using it with the functions:And we also gonna see that how we can use it with both the function-types:
// (simple-functions) and (arrow-functions):

// [first-type]: Simple-Functions:means those functions which has been created using the (function) keyword:
// here we are using the Commonjs Export-Syntax with (simple-function) directly without even declaring the (object-first) with in it:

// V.V.IMP = we also have two ways to do it:

// -> [first-way] => In first-way we create the function in the (simpler-way) using (function) keyword:and then simply pass that function to the (module.exports) keyword using the (equalTo) sign:

// V.V.IMP-[NOTE]:-> this is the only way we can export our own created function as (function) on nodejs with its (CommonJs) syntax:

module.exports  = function sum(x, y) {
  return x + y;
}

// -> [Second-way] => In this way we gonna create the function in different way:by providing our (function-name) directly to the (module.exports) keywords with the help of (.) dot-keyword:and then create the function using (function) keyword:and after that assign it through (equalTo) sign to the (module.exports) keywords with its (function-name):

// V.V.IMP-[NOTE]:we have use this way in our (backend-codeial) project:we can also use the (async-await) method with it:mostly we are gonna be use this way in our (backend) projects:
// V.V.IMP-[NOTE]:-> we can also use this same-way:with the (arrow-functions) as well:

// module.exports.sum = function (x, y) {
//   return x + y;
// }
// module.exports.multiple = function (x, y) {
//   return x * y;
// }

// [Second-type]: Arrow-Functions:means those function which we are not created using the (function) keywords:they are created using the (arrow-functions) method:
// IMP = here we gonna use the (arrow-functions) directly with the module.exports keyword by declaring its function-name with them as well:same thing we did with in the simple-function's second-way:
// And we can declare (arrow-functions) method by combining (equalTo(=)) and (greaterThan(>)) sign:

// V.IMP-NOTE = here these functions is also gonna be exported as properties:
// V.V.IMP => we can also use (arrow-functions) directly with the (module.exports) keywords in two-ways:same as the simple-functions:

// [first-way]: Is that we can create the simple (arrow-function):
// IMP[NOTE] = but it is not the compatible way that's why we did not use it.because in this syntax we are gonna be able to (name) our (arrow-function):
// module.exports = (x,y) =>{
//     return x + y;
// }

// [second-way]: Is that we can create the (arrow-function) with the help of (module.exports) keywords: by declaring its function-name with them as well: and then assign it to the (module.exports) keywords with the help of (equalTo) sign: same way we did with the (simple-functions):

// module.exports.multiple = (x, y) => {
//     return x * y;
// };

// -> [Third-way] => we can also do it only with the help of (exports) keyword:we did not have to use the (module) keyword with it:
// V.IMP-NOTE: The Exports method basically uses the (module.exports) keywords internally:but its different then (module.exports) method:because the(exports) method does not able to export the (classes) and (functions): It can only be able to export the (variables) and (objects) and etc:
// V.V.IMP-[NOTE] => This method (specifically) export the functions or anything as properties:

// V.V.IMP = here we gonna see that: how we can use this particular method with both ways (objects) and (non-objects):

// ->[first-way] => using-Object:we can not use this way with the objects:
//  exports = {
//      sum,
//  }

// V.IMP = here we gonna use it with both the function-types:but without the objects declaration:
// (simple-functions) and (arrow-functions):

// => [simple-function]:
// V.V.IMP-NOTE =  here it also gonna be export the simple-functions as properties:not as (function) which we have with the (module.exports) keywords:

exports.subtraction = function(x, y) {
  return x - y;
}

// -> arrow function: here this arrow-function is also gonna be export as properties:

// exports.sum=(x, y)=> {
//   return x + y;
// }

// V.V.IMP[NOTE]:there one more-way to use (exports) keyword:and that we can use if we have already created the thing:which we want to be export:then we can use this way:
// we can use this way: if we are not using the (module.exports) keywords:then we can use the (exports) keyword separately like this:

// exports.sum = sum;

// (V.IMP-NOTE)-[Commonjs-Syntax] :- If we export something (like a function) and import it in another file:then that function will be available in the importing file:
// V.V.IMP-[NOTE]: And also first that entire file gets executed once from where we are exporting some-thing:
// V.V.IMP: later the imports use that already executed code. But only the specific parts of that we import will be accessible in the importing file. This is little different in ES6 modules, which can eliminate unused code.because of its (tree-shaking) approach:

// we can see that with the help of (console) statement:
console.log("executing the hole file");
