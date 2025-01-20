console.log("learning about path module");

// (path) module:It is used to work with the file-system on our computer or machine:
// V.IMP: It is a core module in node js, so we don't need to install it separately:
// V.IMP-NOTE:path-module basically help us to define the paths for the file-system:In such way that our file-system can easily understand the path of the file which we are trying to access:With in the any form of operating-system or machine:because every operating-system or machine has its own way of defining the path for the file-system:that why we need to use path-module to define the paths for the file-system:so that our application can easily understand the path of the file which we are trying to access and did not get crashed:


// here we learn about the path module:
// -> Import (fs-module):because it works with it:
const fs = require("fs");
// -> Import (path-module):we gonna learn to use it with the (fs-module):
const path = require("path");

// we can understand with the help of example:like we want to read some file from the another folder:
// -> first:we gonna check the simple-way of defining path to the file-system:why simply defining the (directory-path) through (string) to the file-system:

const readingFile = fs.readFile('./src/database/data.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error while reading the file:',err);
    }else{
        console.log('data from the file:',data);
    }
});

// -> second:we gonna check about that how we can define the (path) to the file-system with the help of (path-module):
// Steps To Follow:
// IMP-1: so for defining-path to the (fs) with the help of (path-module):first we have to define the path separately:because we can't directly define the path to the (fs) with the help of (path-module) and path-module does not work that way:because for creating path using (path-module) we need to use (methods) of (path-module):
// that's why we have to define the path separately:we gonna define the path separately with in the const-variable:and with in that variable we are gonna define the path through the help of (methods) of (path-module):and then we can use that (path-variable) to define the path into the file-system:

// IMP-2:these method of path-module:basically define the (path) in such-way that they can be easily understand by the any operating-system or machine's file-system:
// -> so for creating path using (path-module):we have its (join) method:which is used to join the (path) of the file-system:
// what does that (join) the path of file-system:means

const readFileData = fs.readFile(,'utf-8',function(err,data){
    if(err){
        console.log('error while reading the file:',err);
    }else{
        console.log('data from the file:',data);
    }
})