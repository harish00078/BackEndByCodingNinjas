// --- How to Import Modules Using ES6 Module Syntax in Node.js ---

// ES6 modules make it easy to organize and reuse code using the `import` keyword.
// This file demonstrates two main ways to import modules in Node.js using ES6 syntax (.mjs files).

// IMPORTANT NOTES:
// 1. With ES6, you can only import what was explicitly exported from a module file. Anything not exported is not accessible.
// 2. When writing ES6 modules in Node.js, use the `.mjs` file extension for compatibility, unless your project is configured for ESM with `.js` files.
// 3. ES6 modules support named and default exports, enabling better static analysis and tree-shaking than CommonJS.

// There are two primary styles of ES6 imports:

// 1. Importing *all* module exports as a single namespace object
//    - Use `import * as <ObjectName> from "<module>"` syntax.
//    - All named exports from the target module are grouped as properties of your chosen object.
//    - Example below: All exports from "script.mjs" will be accessible via the `arithmeticModules` object.

import * as arithmeticModules from "./script.mjs";
// Access via property on namespace:
console.log(arithmeticModules.multiple(5, 6)); 


// 2. Importing only the specific named exports you need
//    - Use `import { exportName } from "<module>"` syntax.
//    - This allows you to import just a subset of the exports, reducing clutter and making code more concise.
//    - You must use the exact export name as specified in the exported module.

import { sum } from "./script.mjs";
console.log(sum(7, 7));

// In summary:
// - Use the namespace syntax (`import * as ...`) to access all exports as a bundled object.
// - Use destructuring import (`import { ... }`) for selective, clean access to specific exports.
