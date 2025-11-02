// Demonstrating how to import and use modules exported from 'arithmetic.js' using CommonJS syntax.


// In Node.js, modules can be imported in different ways depending on how they are exported. 
// Let's clarify the main approaches:

// --- Exporting in CommonJS ---
// 1. Exporting multiple functions as properties of an object (module.exports = { ... })
// 2. Exporting a single function directly (module.exports = function ...)
// 3. Attaching functions as properties to module.exports or exports

// --- Importing in CommonJS ---
// There are two main ways to import modules:

// [1] Import the entire module as an object, then access exported members as properties:
    // const arithmetic = require("./arithmetic");
    // console.log(arithmetic.add(5, 5));

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

