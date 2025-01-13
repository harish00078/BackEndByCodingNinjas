console.log("Learning About File-System Module");
// (FS)-File System Module:It basically allows us to work with the file system on our computer or machine:

// here we are learning about the (synchronous) methods of the file system module:
// -> 2 = Creating a file:
// using the (writeFileSync) method:which is used to (create) a file and (write) data to it:it is a synchronous method:
// IMP:It takes 2 arguments/parameters:
// -> 1 =  the (path) of the file:if it exits then it will overwrite the file:if doesn't exist then it will create a new-file:
// -> 2 =  the (data) that we want to write to the file:

// Import the (fs) module:
const fs = require("fs");

// Creating a file and writing data to it:
// with the help of the (writeFileSync) method:
// V.IMP-NOTE:so some time when we write the data to the file:or try to create the new-file:then it will give us the error:because we may not have the permission to write to the file on user's computer:so that where to avoid that error we can use the (try-catch) block method:
 try{
    const data = fs.writeFileSync("data.txt", "name:John Doe,age:25,city:New York");
 }catch(error){
    console.log(error,"Error Occurred");
 }


// Reading the data from the file:with the help of the (readFileSync) method:
const readData = fs.readFileSync("data.txt", "utf-8");
console.log(readData);


// -> 3 = Updating-file or updating-data in the file:
