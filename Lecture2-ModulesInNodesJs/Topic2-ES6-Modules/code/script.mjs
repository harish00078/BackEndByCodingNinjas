// ==> In This:- Topic-file we are gonna be learn about (ES6 Module syntax):

// V.V.IMP = In ES6-modules syntax we basically use the (export) keyword simply to export things or modules we can say from one file to another file:

// => ES6 Module:The ES6 module syntax is a more modern approach that is supported by modern JavaScript environments or we can say by the (Libraries) and (Frameworks): and it uses the "import" and "export" keywords:
// V.IMP = For this approach we did not have to create the module.exports object:we can simply export our function or anything that we want to export as a module by using the (export) keyword in (front) of them or (after) them:
// V.IMP = we have use this (module) method or syntax with in our (react) learnings:

// V.V.IMP(NOTE) = so when we are using the (ES6) module-syntax:To (import) and (export) Modules from one file to another file:Mostly when we are creating the application simply using (nodejs) environment or we can say without the help of any (frameworks) and (libraries):then we have to use the (mjs) extension in the file-name:instead of using simple (js) extension:
// because In this case:if we use the simple (js) extension:then our application code will not gonna get executed:

// IMP = we can create its functions in two ways:
// -> 1 =  create function using simple-function keyword:
export function multiple(x, y) {
  return x * y;
}
export function divided(x, y) {
  return x / y;
}

// -> 2 = more simpler way is that we can use the arrow-functions:
export const sum = (x, y) => {
  return x + y;
};

// (IMP-NOTE) =  If we export something (like a function) and import it in another file, the entire file gets executed once. later the imports use the already executed code. But only the specific parts that we import will be accessible in the importing file. This is little different in ES6 modules, which can eliminate unused code.because of its tree shaking approach:
