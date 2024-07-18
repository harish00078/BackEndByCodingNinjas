// here we gonna see that:how Modules are help full in Nodejs:

// Modules help us to do mainly two things:
// => first =  using modules we can share our code.or we can say that the particular section of our code from one-file to another-file:with the help of modules we can use something on the other file which we have created on the one particular file:
// => Secondly = V.V.IMP(Note)= In Node.js, with the help of modules, we are able to connect our code or its multiple files:within one file and that one file is basically connected to our main app-file or server-file:We can also connect those files one by one with the main server-file. Instead of combining them first into one file:this is how we connect multiple files with in our Node.js or server application.

// IMP => we have two ways to do that:these are not types they are only the ways to create a module:we can also call them two diff syntaxes to create modules in nodejs:
// -> 1 = CommonJs Module syntax:
// -> 2 = ES6 Module syntax:



// => first = here we see that how we can do that with the help of (commonjs) modules method:
// for that here we gonna create the two arithametic functions:both of these arithametic functions gonna get the same type of (argument) variables:

// function sum(x, y) {
//   return x + y;
// }

function div(x, y) {
  return x / y;
}

// In commonjs modules method we use (module.exports) keyword:it is basically receive a (object) or its (object):In which we assign our function,variables,or anything that we want to export from our file:as a key-value pair:same thing we do with the objects:
// V.IMP(NOTE):here we use (exports) keyword:

// => CommonJs Module:CommonJS is the default module system in Node.js that uses the ‘require’ function to import modules and the ‘module.exports’ object to export them:

// => we can also use module.exports object in two ways:
// -> first = is that we can do it as key-value pair with in the module.exports object:
// module.exports = {
//   add: sum,
//   Div: div,
// };
// -> second = is that we can simply proivde our created functions as keys with in the module.exports object:
module.exports = {
  
 add:div,
};

//V.IMP(NOTE) = here we also gonna see that how we can also use the (commonjs-modules) method directly with the functions and with others things as well:

// V.IMP = we use it with both function types:(simple-functions) and (arrow-functions):

// -> 1 =  create function using function-keyword:

module.exports = function sum(x, y) {
    return x + y;
};

// -> 2 = more simpler way is that we can use the arrow-functions:

// module.exports.multiple = (x, y) => {
//     return x * y;
// };




// => second =  here we see that how we can do that with the help of (ES6) modules:
// V.IMP = here we use (export) keyword:

// => ES6 Module:The ES6 module syntax is a more modern approach that is supported by modern JavaScript environments, and it employs the "import" and "export" keywords:
// V.IMP = For this approach we did not have to create the module.exports object:we can simply export our function or module by using the (export) keyword in front of them or after them:
// V.IMP = this module-method.we have used in the (react):

// IMP = we can create its functions in two ways:
// -> 1 =  create function using function-keyword:
// export function divide(x, y) {
//   return x / y;
// }

// -> 2 = more simpler way is that we can use the arrow-functions:
// export const divide = (x, y) => {
//   return x / y;
// };
