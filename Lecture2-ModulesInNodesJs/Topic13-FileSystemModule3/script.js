console.log("learning file system module in node js");
// Here we are going to learn about (Asynchronous) file-system-module methods in node js:
// IMP-NOTE:We learned about performing CRUD operations using blocking code with the FileSystem module, which means while file operations are being performed, our main-thread is blocked, and it can't perform any other task. Blocking code can make your app less responsive and slow. To avoid this, we can use non-blocking or asynchronous-methods available in the FileSystem module:
// V.IMP:the (Asynchronous) methods basically did not have the (async) keyword in the last of the method-name:the way we have with in the synchronous-methods:

// we gonna learn about Asynchronous fS-module methods by performing CRUD-operations on a file:

// -> first import module:
const fs = require("fs");

// then we use its methods to perform CRUD operations on a file:
// 1. Creating a file:


