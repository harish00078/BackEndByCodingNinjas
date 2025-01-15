console.log("learning file system module in node js");
// Here we are going to learn about (Asynchronous) file-system-module methods in node js:

// V.IMP:the (Asynchronous) methods basically did not have the (async) keyword at the last of the method-name:the way we have with in the synchronous-methods:and we did not have do that because the (asynchronous) methods are (default) in the node js:and we can use them without using the (async) keyword at the last of the method-name:

// we gonna learn about Asynchronous fS-module methods by performing CRUD-operations on a file:

// -> first import module:
const fs = require("fs");

// V.IMP-NOTE(working):In (Asynchronous) methods basically have the (callback) function as an (second-argument):as we have learn with in the (Asynchronous) working-system in js:through which we are gonna perform the (CRUD-operations) on the files or files-data:through which we are gonna perform the (CRUD-operations) on the files or files-data in asynchronous-way:
// this difference between (synchronous) and (asynchronous) method:In (synchronous) methods we basically provide the (data) as an (argument/parameter) directly:
// V.IMP: In (Asynchronous) methods, we don't provide the data as an argument directly to fs-methods as we have learned that to handle the (asynchronous-operations) we have to the the other methods or ways which basically help us to handle the (asynchronous-operations) or methods:
// -> they take the (callback-function) or other-method and  ways which basically help us to handle the (asynchronous-operations):
// V.IMP-NOTE:here we are using the asynchronous methods:so to handle the (asynchronous-methods):we have to provide them the (callback-function) as there last-argument:as we have learned that in asynchronous-system in js:
// V.IMP:they take a callback function as their last argument, which is called when the operation is completed. The callback function has (two-arguments):
// -> 1 = the first argument is an (error-object):
// -> 2 = the second argument is the result of the operation:
// IMP-NOTE: If an error occurred, the first argument will contain an error object, otherwise, the first argument will be null. The second argument will contain the result of the operation. 
// V.IMP-NOTE: As we have learned with in the (Asynchronous)  or (event-loop) architecture in js: The (Asynchronous) methods are non-blocking, which means that the main-thread will not be blocked, and it can perform other tasks while the file operation is being performed. The (Asynchronous) methods are always preferred over the blocking methods:
// and we have learned that (asynchronous) working of (js):Can be achieved with the help of (callbacks) or other-method of  js:



// -> then we can use its methods to perform CRUD operations on a file:
// 1. Reading a file:
// using fs-module's  asynchronous-method: which is (readFile) method:It is used to read the data from a file:
// IMP-NOTE: The (readFile) method takes three arguments:
// -> 1 =  the (path) of the file:which we want to read:
// -> 2 = the (encoding) of the file:convert the buffer-data into a string-data:
// -> 3 = the (callback-function):which is called when the operation is completed:
// -> the callback-function has two arguments:
// -> 1 = the first argument is an (error-object):
// -> 2 = the second argument is the result of the operation:







