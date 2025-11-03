// Understanding Modules in Node.js

// Modules in Node.js are essential for organizing, reusing, and sharing code. They allow us to:
// 1. Export specific parts of our code from one file and import them into another, making our codebase more organized and maintainable.

// 2. because of this we can (Split) our application into multiple files, which can be connected to the main app or server file. This modular-approach is similar to using components in React and makes code easier to manage.
// 3. Import other-type and built-in modules (like 'fs' for file system operations) and third-party libraries through modules, enabling us to leverage a wide range of functionality in our applications.

// There are two main module systems in Node.js:
// 1. CommonJS Module Syntax (default in Node.js)
// 2. ES6 Module Syntax

// In this file, we'll focus on the CommonJS module system.

// Demonstrating CommonJS Module Syntax in Node.js:

// In Node.js, modules help organize and reuse code. The CommonJS module system (the default in Node.js) uses `require` to import and `module.exports` (or `exports`) to export code between files.

// => Know we have different-syntax-types available to export things using CommonJS-syntax:
// -> but they mainly lies under two-categories:
// -> 1 = Exporting one or multiple things as an Object: (properties-of-object):
// -> 2 = Exporting a Single thing Directly: (direct or non-property export):

// --- 1. Exporting one or multiple things as an Object: ---
// => know with in this category mainly we have three-types of syntax available to export things:

// (First type) — You can define your functions separately and export them as properties of an object.This approach is most useful when you want to export multiple related functions or values together,making it easy to organize and access all relevant features through a single imported object.For example, you might group arithmetic functions into one exported object for cleaner, modular access.
// (NOTE) = with in first-type we have also have two-ways of syntax available to export things:
// -> 1 = You can define your functions-separately and export them as properties of an object:
// -> 2 = You can use the shorthand syntax to export things:(where we use the (same-name) for the (function) and the (property) of the (object)):

// -> 1 = You can define your functions-separately and export them as properties of an object:

// function sum(a, b) {
//   return a + b;
// }
// function div(a, b) {
//   return a / b;
// }

// (NOTE) = here we have exported the (sum) and (div) functions as properties of an object:and we have also assigned the (sum) and (div) functions to the (addition) and (divide) properties of the (module.exports) object:

// module.exports = {
//   addition: sum,
//   divide: div,
// };

// -> 2 = You can use the shorthand syntax to export things:
// module.exports = { sum, div };

// -> (Second type): Instead of defining functions separately and then attaching them to `module.exports`, you can define and export them together in one step:mostly use of it is that we want to create and exports things separately instead of putting them together in one object:
// (Explanation): This means you create and export your functions at the same time by directly assigning them as properties on the `module.exports` object:
// (Note): Here, you add properties (like `.sum` or `.div`) directly to `module.exports` using dot notation, allowing you to define and export individual functions in a concise way.

module.exports.sum = (a, b) => {
  return a + b;
};
module.exports.div = function (a, b) {
  return a / b;
};

// -> (Third type): This is similar to the second type, but here we use the `exports` object instead of `module.exports` to export properties.
// Important Note: The `exports` object is simply a reference to `module.exports`. Therefore, using `exports` to add new properties works (e.g., `exports.func = ...`), but assigning a new object directly to `exports` (e.g., `exports = { ... }`) will break this reference and will NOT export as expected. 
// Summary: Only use `exports` to add new properties to the module, not to reassign the whole object.
exports.sum = (a, b) => {
  return a + b;
};

// --- 2. Exporting a Single Function Directly ---
// If you only want to export one function, you can assign it directly to `module.exports`:

module.exports = function sum(x, y) {
  return x + y;
};

// --- 3. Exporting Multiple Functions as Properties ---
// You can attach functions directly as properties to `module.exports`:

// module.exports.sum = function (x, y) {
//   return x + y;
// };
// module.exports.multiply = function (x, y) {
//   return x * y;
// };

// --- 4. Using Arrow Functions ---
// Arrow functions can also be exported in the same way:

// module.exports.multiply = (x, y) => x * y;

// --- 5. Using the `exports` Shortcut ---
// `exports` is a shorthand for `module.exports` and is commonly used to attach properties:

exports.subtraction = function (x, y) {
  return x - y;
};

// You can also use arrow functions:

// exports.sum = (x, y) => x + y;

// Note: Assigning a new object to `exports` (e.g., `exports = { sum }`) will not work as expected, because it breaks the reference to `module.exports`.

// --- Additional Notes ---
// - When you import a module, the entire file is executed once, and only the exported parts are accessible.
// - In ES6 modules, unused code can be eliminated via "tree-shaking", but CommonJS does not support this optimization.

// For demonstration, let's log when this file is executed:
console.log("Executing the entire arithmetic.js file");
