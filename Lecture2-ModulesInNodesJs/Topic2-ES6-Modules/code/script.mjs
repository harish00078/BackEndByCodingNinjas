// In this topic file, we're going to learn about ES6 module syntax in Node.js.

// ES6 modules allow us to organize and share code using the modern `import` and `export` keywords,
// which are supported by most JavaScript environments (including frameworks and libraries).
// Unlike CommonJS (`module.exports`), ES6 modules don't require creating an exports object: you simply use the `export` keyword before whatever you want to share.

// IMPORTANT: When using ES6 module syntax in standalone Node.js projects (not with frameworks/libraries),
// you should save your modules with the `.mjs` extension instead of `.js`.
// If you use `.js` without configuring your project to use ES modules, the code might not execute as expected.

// With ES6 modules, you can define and export values (functions, variables, classes, etc.) in multiple-ways:

// Example 1: Exporting a function declaration directly with the `export` keyword:

export function multiple(x, y) {
  return x * y;
}

// Example 2: Exporting arrow functions as named exports.
// Remember to declare the function as a variable (typically with `const`) and add the `export` keyword.
export const sum = (x, y) => {
  return x + y;
};

export const div = (x, y) => {
  return x / y;
};

// NOTES:
// - When you import something from an ES6 module, the entire file is executed once.
//   After that, additional imports use the already loaded (cached) module.
// - Only the parts you explicitly import (the exported members) are accessible in your importing file.

// ADVANTAGE: One major benefit of ES6 modules is "tree-shaking":
// - Tree-shaking is the process of removing unused code from the final bundle.
// - Because ES6 module imports/exports are statically analyzable, bundlers can detect what code isn't used,producing smaller and more efficient applications by eliminating dead (unused) code.
