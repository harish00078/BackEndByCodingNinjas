// here we are gonna use those arithametical functions modules:and get the result from them and print it on the terminal:

// V.IMP => first we gonna see that how we can import things which are exported by the CommonJs-based modules:

// V.V.IMP = here we do it with the help of (require) method:
// we can also do it in two ways:
// V.V.IMP = when we are calling our module functions here they are respersenting there selfs as properties:because of the module.exports object:because we are exporting those functions with in the object:

// 1 = first is that we can import the hole-file:and proivde him the variable-name:and using that varaible-name.we can use our modules by calling them through the vairble-name:whenever we want to use them:

// const arithameticModules = require('./arithametic');

// 2 = second is that we can only import the modules that we want to use from the file:
const {add,Div} = require('./arithametic');

console.log(add(3, 0));
console.log(Div(9, 40));
