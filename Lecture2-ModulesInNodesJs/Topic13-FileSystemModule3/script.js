console.log("learning file system module in node js");
// Here we are going to learn about (Asynchronous) file-system-module methods in node js:
// IMP-NOTE:We learned about performing CRUD operations using blocking code with the FileSystem module, which means while file operations are being performed, our main-thread is blocked, and it can't perform any other task. Blocking code can make your app less responsive and slow. To avoid this, we can use non-blocking or asynchronous-methods available in the FileSystem module:
// V.IMP:the (Asynchronous) methods basically did not have the (async) keyword at the last of the method-name:the way we have with in the synchronous-methods:and we did not have do that because the (asynchronous) methods are (default) in the node js:and we can use them without using the (async) keyword at the last of the method-name:

// we gonna learn about Asynchronous fS-module methods by performing CRUD-operations on a file:

// -> first import module:
const fs = require("fs");

// V.IMP-NOTE(working):In (Asynchronous) methods basically have the (callback) function as an (second-argument):through which we are gonna perform the (CRUD-operations) on the files or files-data:
// this difference between (synchronous) and (asynchronous) method:In (synchronous) method we basically provide the (data) as an (argument) directly:
// V.IMP: In (Asynchronous) methods, we don't provide the data as an argument directly to fs-methods:but they take a callback function as their last argument, which is called when the operation is completed. The callback function has (two-arguments):
// -> 1 = the first argument is an (error-object):
// -> 2 = the second argument is the result of the operation:
// IMP-NOTE: If an error occurred, the first argument will contain an error object, otherwise, the first argument will be null. The second argument will contain the result of the operation. 
// V.IMP-NOTE: As we have learned with in the (Asynchronous)  or (event-loop) architecture in js: The (Asynchronous) methods are non-blocking, which means that the main-thread will not be blocked, and it can perform other tasks while the file operation is being performed. The (Asynchronous) methods are always preferred over the blocking methods:
// and we have learned that (asynchronous) working of (js):Can be achieved with the help of (callbacks) or other-method of  js:

// -> then we can use its methods to perform CRUD operations on a file:
// 1. Reading a file:




