console.log("Learning About File-System Module");
// (FS)-File System Module:It basically allows us to work with the file system on our computer or machine:

// here we are learning about the (synchronous) methods of the file system module:
// -> 2 = Creating a file:
// using the (writeFileSync) method:which is used to (create) a file and (write) data to it:or also it basically overwrites an existing one:it is a synchronous method:
// IMP:It takes 2 arguments/parameters:
// -> 1 =  the (path) of the file:if it exits then it will overwrite the file:if doesn't exist then it will create a new-file:
// -> 2 =  the (data) that we want to write to the file:

// Import the (fs) module:
const fs = require("fs");

// Creating a file and writing data to it:
// with the help of the (writeFileSync) method:
// V.IMP-NOTE:so some time when we write the data to the file:or try to create the new-file:then it will give us the error:because we may not have the permission to write to the file on user's computer:so that where to avoid that error we can use the (try-catch) block method:
 try{
    const createFile = fs.writeFileSync("data.txt", "name:John Doe,age:25,city:New York");
 }catch(error){
    console.log(error,"Error Occurred");
 }


// Reading the data from the file:with the help of the (readFileSync) method:
const readFile1 = fs.readFileSync("data.txt", "utf-8");
console.log(readFile1);


// -> 3 = Updating-file or updating-data in the file:
// using the (appendFileSync) method:which is used to (update) the file or (add) data to the file:it is a synchronous method:
// IMP:It takes 2 arguments/parameters:
// -> 1 =  the (path) of the file:if it exits then it will update the file or its data:if doesn't exist then it will create a new-file: 
// -> 2 =  the (data) that we want to write to the file:
const updateFile = fs.appendFileSync("data.txt","\nName:david Doe,age:30,city:Los Angeles");

const readFile2 = fs.readFileSync("data.txt", "utf-8");
console.log(readFile2);

// -> 4 = Deleting a file:
// using the (unlinkSync) method:which is used to (delete) a file:it is a synchronous method:
// IMP:It only takes 1 argument/parameter:
// -> 1 =  the (path) of the file:which we want to delete:
// IMP-NOTE:so some time when we try to delete the file:then it will give us the error:because we may not have the permission to delete the file on user's computer or may have another error condition while deleting the file:so that where to avoid that error we can use the (try-catch) block method:
try{
   const deleteFile = fs.unlinkSync("data.txt");
}catch(error){
    console.log(error,"Error Occurred");
}

const readFile3 = fs.readFileSync("data.txt", "utf-8");
console.log(readFile3);