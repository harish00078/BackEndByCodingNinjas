// using the ES6 modules:that we have exported from the script-file:
// for importing them:we simply need to use the (import) keyword:
// V.V.IMP(NOTE):
// [first-note]:when we say that.we are importing the all modules at once:it basically means that we are only importing the modules which we have exported:and not importing any other modules:
// [second-note]:so when we are using the (import) and (export) method:To use (Modules) from one file to another file:then we have to use the (mjs) extension in the file-name:instead of simple (js) extension:
// [third-note]:(MOST-IMP):so when we are using the (ES6) module method.To use (Modules) from one file to another file:then we basically have the (function) module as (function-module) not as (property) module:that we are getting in the (commonjs) module method:

// IMP => In (ES6) module method:we have three ways to import the things:
// => 1 = first:- is that we can use the asterisk- keyword (*):To import all modules at once:and store them in the variable-name:and from that variable-name we can access our module functions or other things those we have exported:and access them by using the dot (.) keyword on the variable-name:
// V.IMP = all things are gonna we store with in the variable-name (object):
// V.V.IMP-[NOTE]= [Tree shaking] is a term used in JavaScript for dead code elimination. It's a process that removes unused code from your final bundle, resulting in smaller and faster applications. Tree shaking relies heavily on the static structure of ES6 modules (import and export statements). This allows bundlers to analyze your code and determine which parts are actually used.
import * as arithameticModules from "./script.mjs";
console.log(arithameticModules.multiple(5, 5));

// => 2 = second:- way is that we can only import those modules which we want to use from the exported-file:for doing this basically we need to import the modules using (import) method:and put it in the (object) by using currly braces:

import { sum } from "./script.mjs";
console.log(sum(15, 5));
