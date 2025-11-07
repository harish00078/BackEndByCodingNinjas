// Demonstrating how to import and use modules exported from 'arithmetic.js' using CommonJS syntax:

// In Node.js, modules can be imported in different ways depending on how they are exported:
// NOTE: We use the (require) keyword or function to import modules in Node.js for commonjs module syntax:
// IMP: So we have two-categories of syntax available to export things using CommonJS-syntax:in the same way we have two-categories of syntax available to import things using CommonJS-syntax:
// -> 1 = Importing one or multiple-things as an Object: (properties-of-object):
// -> 2 = Importing a Single thing Directly (or we can say that be are importing the function or things for as it is they are): (direct or non-property export):

// (first-type): Importing one or multiple-things as an Object: (properties-of-object):
// IMP:know with in this category mainly we have two-ways of syntax available to import things:
// -> 1 = Importing the entire-module as an object, then access exported members as properties:
// -> 2 = Destructure or (object-destructuring) help us to does specific imports directly it (works when we are getting the object in exports):

// [1-way] Import the entire module as an object using require method and store it in a variable, then access its exported-members via the variable's properties using dot-notation:
// const arithmetic = require("./arithmetic");
// console.log(arithmetic.sum(5, 10));

// [2-way] Destructure or (object-destructuring) help us to do specific-imports-directly it (works when we are getting the object in exports):
// IMP: In this case, we can import specific-imports-directly without having to create a variable to store the entire-module.
// (destructuring or object-destructuring): In destructuring, basically we can get or access the exported-properties of the object and store them into the new-object directly which we have created using the (curly-brackets) on the import side with the help of require method:and with the help of that new-object we can easily access or use those properties of the exported-module:

// const { sum } = require("./arithmetic");
// console.log(sum(5, 10));

// (Second-type): Importing a Single thing Directly (or we can say that be are importing the function or things for as it is they are): (direct or non-property export):
// NOTE: Another reason it’s called a “single-thing direct import” is because, in this pattern, we can only import one-item directly from a one-file. 
// This is due to Node.js’s core module system — each file can have only one direct export (via `module.exports =`), 
// meaning only one value can be imported from that file. Attempting to directly export multiple items from the same file will cause the previous exports to be overwritten.
// IMP:For Importing a single thing directly: we simple have to define the (variable-name) for the (function) or (thing) which we are importing directly:and it automatically gonna save in that variable-name:
// and we did not have use the exact variable-name as export it can be different:

const addition = require('./arithmetic.js');
console.log('direct imports: ',addition(5, 10));



// --- Additional Note ---
// Node.js caches modules after the first require call.
// If you require the same module again, you get the cached version, not a fresh instance.
