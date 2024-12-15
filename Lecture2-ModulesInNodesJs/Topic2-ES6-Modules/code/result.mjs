// => Here we are going to learn that:how to import things using the ES6 module syntax:

// IMP:Its very simple:To import things using the (ES6) module syntax:we only have to use the (import) keyword:

// IMP-NOTES:
// [first-note]:when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// [second-note]:so when we are use (ES6) module-syntax:then we have to use the (mjs) extension in our file-name:instead of simple (js) extension:as we have learn that otherwise our application code will not gonna get executed:
// [third-note]:(MOST-IMP):When using ES6 modules, we import modules as functions, classes, or objects, rather than as properties of a single exported object (as is typical with CommonJS). Unlike CommonJS, where all exports are properties of a module object, ES6 modules use (named) or (default) exports for better (tree-shaking) and (static-analysis):

// => V.IMP: In (ES6) module syntax:we basically have two ways to import the things:
// [First-way] = Is that we can import the all modules at once:
// [Second-way] = Is that we can only import those modules which we want to use from the exported-file:

// [First-way]: We use the asterisk-keyword (*) to import all modules at once:and store them in the (variable-name) with the help of (as) keyword:and from that variable-name we can access our module functions or other things those we have exported:and we can access them from (variable-name) through the help of dot (.) keyword:
// V.IMP: know here everything means that we are only gonna be able to access the modules from that file which we have exported:
// V.IMP = all things are gonna we store with in the variable-name (object):the variable-name which we have created  basically to use with in the (import) method:

import * as arithmeticModules from "./script.mjs";
console.log(arithmeticModules.multiple(5, 6));

// [Second-way]: Here we also use the (import) keyword to import things:but if we only want to import the particular thing from the exported-file:then we have to use the (curly-brackets) or (object) instead of (*) and (as) keywords:and with in those curly-brackets or (object) we basically have to import our things:
// V.IMP-NOTE:Here we have to take care of one-thing as well:which is that the (thing) we are importing:that should have the (same-name) as the (name) on which we have exported it:

import { sum } from "./script.mjs";
console.log(sum(7, 7));
