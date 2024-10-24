// here we gonna see that:how Modules are help full in Nodejs:

// Modules help us to do two and more things:
// => first =  using modules we can share our code.or we can say that the particular section of our code-file from one-file to another-file:with the help of modules we can use something on the other files which we have created on the one particular file:
// => Secondly = V.V.IMP(Note)= In Node.js, with the help of modules, we are able to connect our code or its multiple files:within one file and that one file is basically connected to our main app-file or server-file:We can also connect those files one by one with the main server-file. Instead of combining them first into one file:this is how we connect multiple files with in our Node.js or server application:same thing we do with the front-end section of our application as well:
// => third = V.V.IMP(NOTE):modules syntax allows us to import built-in modules (like 'fs' for file system operations) and other libraries that we install into our application using Node.js environment. This enables us to access and use them in our application files:

// IMP => we have two ways to do that:these are not types they are the ways that how we can have or create modules and access them after that:
// V.V.IMP = we have two diff syntaxes to create modules in nodejs:
// -> 1 = CommonJs Module syntax:
// -> 2 = ES6 Module syntax:

// ===> In this Topic-file we will specifically gonna be learn about (CommonJs Module syntax):

// => first = here we see that how we can do that with the help of (commonjs) modules method:
// for that here we gonna create the two arithmetic functions:both of these arithmetic functions gonna get the same type of (argument) variables:

// function sum(x, y) {
//   return x + y;
// }

// function div(x, y) {
//   return x / y;
// }

// V.V.IMP: In commonjs modules method or syntax way we use (module.exports) keywords with (object) or without the (object) to (export) things:we use them according to how many of things we want to export:
// V.V.IMP(NOTE):CommonJs basically uses a (object) to (export) things that's why it receives or have a (object) with in it:In which we assign our function,variables,or anything that we want to export from our file:
// IMP(NOTE): And that's why its gonna be export them as (key-value) pairs or (Properties):same thing that we have with in the simple-objects:

// => CommonJs Module:CommonJS is the (default) module-system in Node.js which uses the (require) function to import-modules and the (module.exports) object to export them:
// V.IMP-NOTE = here these functions gonna be exports as properties because of the (object) usage:and we have also already know that if we export (functions) as properties then those (functions) become's (methods):

// V.IMP(NOTE)=> we can also use (module.exports) object or (commonjs-export) syntax in two ways:

// => [first-way]:Is with the help of (objects):with in this first-way:we also have the multiple ways do it as well:mainly its in two-ways:

// -> [1-first] == is that we can do it as key-value pairs by providing (keys) to our functions:with in the module.exports object:

// module.exports = {
//   add: sum,
//   Div: div,
// };

// -> [2-second] = Is that we can simply provide our created-functions and other things as it is they are as keys or values we can say with in the module.exports object:and they will automatically becomes the (key-value) pairs by there self:

// module.exports = {
//   sum,
//   div,
// };

// =>[second-way]:In the second-way:we do it without the (objects):we also have the multiple ways here to do it as well:
//V.V.IMP(NOTE) = here we gonna see that how we can also use the (commonjs-modules) export-method directly with the functions and others things as well:
// V.IMP = here we see it using with both the function-types: (simple-functions) and (arrow-functions):

// [first-type]: Simple-Functions:
// here we are using Commonjs Export-Syntax:with the (simple-function) directly:which we have created using (function) keyword:

// V.V.IMP = It also have two ways in it:

// -> [first-way] => In this way have created the function in the (simpler-way):And its gonna be export the (function) as (function):

// module.exports  = function sum(x, y) {
//   return x + y;
// }

// -> [Second-way] => In this way we have created the function in different way.why providing the function-name directly to the module.exports object.and then create the function:
// we can also create the function:like this but its gonna be again working as (properties):
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

// V.IMP-NOTE =  here it also gonna be  export the simple-functions as properties:

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
