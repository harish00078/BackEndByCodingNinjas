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
// -> first:we check the simple-way of doing it:

