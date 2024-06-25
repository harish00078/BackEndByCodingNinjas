// here we gonna see that:how Modules are help full in Nodejs:
// for that here we gonna create the two arithametic functions:both of these arithametic functions gonna get the same type of (argument) variables:

function sum(x, y) {
  return x + y;
}
function div(x, y) {
  return x / y;
}

 
//V.IMP = we can also use the modules directly with the functions and with others things as well:

// => first =  we see that how we can do that with the help of (commonjs) modules:
// V.IMP:here we use (exports) keyword:

// IMP = we can create its function in two ways:
// -> 1 =  create function using function-keyword:
// module.exports = function sum(x, y) {
//   return x + y;
// }

// -> 2 = more simpler way is that we can use the arrow-functions:
// module.exports.sum = (x, y) => {
//     return x + y;
// }

// => second =  we see that how we can do that with the help of (es6) modules:
// V.IMP = here we use (export) keyword:

// IMP = we can create its functions in two ways:
// => 1 =  create function using function-keyword:
export function divide(x, y) {
    return x / y;
}

// => 2 = more simpler way is that we can use the arrow-functions:
export const divide = (x, y) => {
    return x / y;
}


// IMP = using modules we can share our code.or we can say that the particular section of our code from file to another:with the help of modules we can use something on the other file which we have created on this file:
// IMP = we have two ways to do that:these are not types they are only the ways to create a module:we can also call them two diff syntaxes to create modules in nodejs:

// => CommonJs Module:CommonJS is the default module system in Node.js that uses the ‘require’ function to import modules and the ‘module.exports’ object to export them:
// -> we can also do it in two ways:
// -> first = is that we can do it as key-value pair with in the module.exports object:
module.exports = {
  add: sum,
  Div: div,
};
// -> second = is that we can simply proivde our created functions as keys with in the module.exports object:
// module.exports = {
//   sum,
//   div,
// };

// => ES6 Module:The ES6 module syntax is a more modern approach that is supported by modern JavaScript environments, and it employs the "import" and "export" keywords:
// V.IMP = For this approach we did not have to create the module.exports object:we can simply export our function or module by using the (export) keyword in front of them:

// IMP = we can create its functions in two ways:
// -> 1 =  create function using function-keyword:
export function divide(x, y) {
    return x / y;
}

// -> 2 = more simpler way is that we can use the arrow-functions:
export const divide = (x, y) => {
    return x / y;
}