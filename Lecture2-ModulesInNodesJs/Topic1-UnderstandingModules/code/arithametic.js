// here we gonna see that:how Modules are help full in Nodejs:

// Modules help us to do two and more things:
// => first =  using modules we can share our code.or we can say that the particular section of our code-file from one-file to another-file:with the help of modules we can use something on the other files which we have created on the one particular file:
// => Secondly = V.V.IMP(Note)= In Node.js, with the help of modules, we are able to connect our code or its multiple files:within one file and that one file is basically connected to our main app-file or server-file:We can also connect those files one by one with the main server-file. Instead of combining them first into one file:this is how we connect multiple files with in our Node.js or server application:same thing we do with the front-end section of our application as well:
// => third = V.V.IMP(NOTE):modules syntax allows us to import built-in modules (like 'fs' for file system operations) and other libraries that we install into our application using Node.js environment. This enables us to access and use them in our application files.

// IMP => we have two ways to do that:these are not types they are only the ways to create a module:we can also call them two diff syntaxes to create modules in nodejs:
// -> 1 = CommonJs Module syntax:
// -> 2 = ES6 Module syntax:

// ===> In this Topic-file we will specifically gonna be learn about (CommonJs Module syntax):

// => first = here we see that how we can do that with the help of (commonjs) modules method:
// for that here we gonna create the two arithametic functions:both of these arithametic functions gonna get the same type of (argument) variables:

// function sum(x, y) {
//   return x + y;
// }

// function div(x, y) {
//   return x / y;
// }

// In commonjs modules method we use (module.exports) keyword:it is basically receive a (object) or its (object):In which we assign our function,variables,or anything that we want to export from our file:as a key-value pair:same thing we do with the objects:
// V.IMP(NOTE):In CommonJs modules method we use (exports) keyword:

// => CommonJs Module:CommonJS is the default module system in Node.js that uses the ‘require’ function to import modules and the ‘module.exports’ object to export them:
// VIMP-NOTE = here these function gonna be exports as properties:
// => we can also use module.exports object in two ways:
// -> first = is that we can do it as key-value pair with in the module.exports object:
// module.exports = {
//   add: sum,
//   Div: div,
// };
// -> second = is that we can simply proivde our created functions as keys with in the module.exports object:
// module.exports = {
//   sum,
//   div,
// };

//V.V.IMP(NOTE) = here we also gonna see that how we can also use the (commonjs-modules) method directly with the functions and with others things as well:

// V.IMP = we use it with both function types:(simple-functions) and (arrow-functions):

// -> 1 =  create function using simple function-keyword:
// IMP = it also have two ways in it:
// V.V.IMP-NOTE = (first-way) => here its gonna be export the functions as functions:

// module.exports  = function sum(x, y) {
//   return x + y;
// }

// V.V.IMP-NOTE = (second-way) => we can also create the function:like this but its gonna be again working as (properties):
// V.IMP-NOTE:we have use this method in our (backend-codeial) project:we can also use the (async-await) method with it:

// module.exports.sum = function (x, y) {
//   return x + y;
// }
// module.exports.multiple = function (x, y) {
//   return x * y;
// }

// -> 3 = more simpler way is that we can use the arrow-functions:
// V.IMP-NOTE = here this function is also gonna be export as properties:

// module.exports.multiple = (x, y) => {
//     return x * y;
// };

// V.V.IMP = here we see that we can also use the (exports) object directly with the functions and with others things as well:
// IMP(NOTE) = 2 => (this method specifically export the functions or anything as properties):
// V.IMP = we use it with both function types:(simple-functions) and (arrow-functions):
// -> simple function:
// V.IMP-NOTE =  here it also gonna be  export the simple-functions as proeperties:

// exports.sum = function(x, y) {
//   return x + y;
// }

// -> arrow function: here this arrow-function is also gonna be export as properties:

// exports.sum=(x, y)=> {
//   return x + y;
// }

// (IMP-NOTE) =  If we export something (like a function) and import it in another file, the entire file gets executed once. later the imports use the already executed code. But only the specific parts that we import will be accessible in the importing file. This is little different in ES6 modules, which can eliminate unused code.because of its tree shaking approach:

// we can see that with the help of (console) statement:
console.log("executing the hole file");
