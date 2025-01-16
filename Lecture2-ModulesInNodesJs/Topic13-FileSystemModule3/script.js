console.log("learning file system module in node js");
// Here we are going to learn about (Asynchronous-Methods) of file-system-module in node js:

// V.IMP:the (Asynchronous) methods basically did not have the (async) keyword at the last of the method-name:the way we have with in the synchronous-methods:and we did not have do that because the (asynchronous) methods are (default) in the node js:and we can use them without using the (async) keyword at the last of the method-name:

// we gonna learn about Asynchronous-methods of fS-module by performing CRUD-operations on a files same as we have learned with in the (synchronous-methods) of fs-module:

// -> first import module:
const fs = require("fs");

// V.IMP-NOTE(working):In (Asynchronous) methods:we basically have the (callback) function as an (second or third-argument):as we have learn with in the working-system of (Asynchronous) in js:
// -> 1 =  this difference between (synchronous) and (asynchronous) method:In (synchronous) methods we basically provide the (data) as an (argument/parameter) directly:
// -> 2 =In asynchronous methods, data is not provided directly as an argument to file system (fs) methods. Instead, to handle asynchronous operations, other methods or mechanisms are used to manage these processes effectively:these methods basically help us to achieve the (asynchronous) working of js:
// -> those other methods or mechanisms basically are (callback-function) or other-methods and ways which basically help us to handle or perform the (asynchronous-operations):


// V.IMP-NOTE:here we are using the asynchronous-methods:so to handle the (asynchronous-methods):we have to provide them the (callback-function) as an (argument):as we have learned that in asynchronous-system working in js:
// V.IMP:these methods mostly takes a callback function as their last- arguments:which is called when the operation is completed. The callback function has (two-arguments):
// -> 1 = the first argument is an (error-object):
// -> 2 = the second argument is the (result) of the operation:
// IMP-NOTE: If an error occurred, the first argument will contain an error object, otherwise, the first argument will be null:The second argument will contain the result of the operation:


// V.IMP-NOTE: As we have learned with in the (Asynchronous)  or (event-loop) architecture in js: The (Asynchronous) methods are non-blocking, which means that the main-thread will not be blocked, and it can perform other tasks while the file operation is being performed. The (Asynchronous) methods are always preferred over the blocking methods:and as we have learned that (asynchronous) working of (js):Can be achieved with the help of (callbacks) or other-methods and mechanisms which help us to handle the (asynchronous-operations) of js:



// -> learn to use Asynchronous-methods of Fs-module to perform CRUD-operations on a file:

// 1. Reading a file:
// We have the (readFile) method:It is used to read the data from a file:
// IMP-NOTE: The (readFile) method takes three arguments:
// -> 1 =  the (path) of the file:which we want to read:
// -> 2 = the (encoding) of the file:convert the buffer-data into a string-data:
// -> 3 = the (callback-function):which is called when the operation is completed:
// -> the callback-function has two arguments:
// -> 1 = the first argument is an (error-object):
// -> 2 = the second argument is the result of the operation:

// -> first-way:with the help of (arrow-function):
// const readingFile = fs.readFile("data.txt","utf-8",(err,data)=>{});
// -> second-way:with the help of (normal-function):
const readingFile = fs.readFile("./data.txt","utf-8",function(err,data){
    // here first check if an error occurred or not:
    if(err){
        console.log('error while reading the file:',err);
    }else{
        // if no error occurred then print the data:
        console.log('data from the file:',data);
    }
});




