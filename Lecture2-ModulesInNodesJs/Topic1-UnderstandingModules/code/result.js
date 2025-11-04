// Demonstrating how to import and use modules exported from 'arithmetic.js' using CommonJS syntax:


// In Node.js, modules can be imported in different ways depending on how they are exported:
// NOTE: We have to use the (require) keyword to import modules in Node.js for commonjs module syntax:
// IMP: So we have two-categories of syntax available to export things using CommonJS-syntax:in the same way we have two-categories of syntax available to import things using CommonJS-syntax:
// -> 1 = Importing one or multiple-things as an Object: (properties-of-object):
// -> 2 = Importing a Single thing Directly (means we are importing the function or things for as it is they are): (direct or non-property export):

// (first-type): Importing one or multiple-things as an Object: (properties-of-object):
// IMP:know with in this category mainly we have two-types of syntax available to import things:
// -> 1 = importing the entire module as an object, then access exported members as properties:
// -> 2 = Destructure specific exports directly (works when module.exports is an object):



   

// [2] Destructure specific exports directly (works when module.exports is an object):
    // const { add, divide } = require("./arithmetic");
    // console.log(add(5, 10));

// [3] If the module exports a single function directly (module.exports = function...), 
// you can import it as a function:
    // const sum = require("./arithmetic");
    // console.log(sum(34, 5));

// --- Example with the current 'arithmetic.js' ---
// In 'arithmetic.js', we have:
// module.exports = function sum(x, y) { return x + y; };
// So, the module exports a single function directly.

// Therefore, we import it as follows:
const sum = require("./arithmetic");
console.log(sum(34, 5)); // Output: 39

// Note: If you try to import using destructuring or as an object, it will not work in this case,
// because the module itself is a function, not an object with properties.

// --- Additional Note ---
// Node.js caches modules after the first require call. 
// If you require the same module again, you get the cached version, not a fresh instance.

