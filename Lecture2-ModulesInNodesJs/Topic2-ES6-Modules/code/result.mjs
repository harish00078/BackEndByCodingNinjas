// => Here we are going to learn that:how to import things using the ES6 module syntax:

// IMP:Its very simple:To import things using the (ES6) module syntax:we only have to use the (import) keyword:

// IMP-NOTES:
// [first-note]:when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// [second-note]:so when we are use (ES6) module-syntax:then we have to use the (mjs) extension in our file-name:instead of simple (js) extension:as we have learn that otherwise our application code will not gonna get executed:
// [third-note]:(MOST-IMP):When using ES6 modules, we import modules as functions, classes, or objects, rather than as properties of a single exported object (as is typical with CommonJS). Unlike CommonJS, where all exports are properties of a module object, ES6 modules use named or default exports for better tree-shaking and static analysis:

// => IMP = In (ES6) module method:we have three ways to import the things:
// => 1 = first:- is that we can use the asterisk- keyword (*):To import all modules at once:and store them in the variable-name:and from that variable-name we can access our module functions or other things those we have exported:and access them by using the dot (.) keyword on the variable-name:
// V.IMP = all things are gonna we store with in the variable-name (object):
// V.V.IMP-[NOTE]= [Tree shaking] is a term used in JavaScript for dead code elimination. It's a process that removes unused code from your final bundle, resulting in smaller and faster applications. Tree shaking relies heavily on the static structure of ES6 modules (import and export statements). This allows bundlers to analyze your code and determine which parts are actually used.
import * as arithmeticModules from "./script.mjs";
console.log(arithmeticModules.multiple(5, 6));

// => 2 = second:- way is that we can only import those modules which we want to use from the exported-file:for doing this basically we need to import the modules using (import) method:and put it in the (object) by using curly braces:

import { sum } from "./script.mjs";
console.log(sum(7, 7));
