console.log("here we are learning about file-system-module in node js");
// (FS)-File System Module:It basically allows us to work with the file system on our computer or machine:
// V.IMP: We can use it to read, write, delete, update (data) in files and folders on our computer:It also help us to move our files and folders on the computer:
// V.IMP-NOTE:Working with file-system is basically a (input-output) operation:because (fs) is also managed by the other system which is the operating system: so it is an input-output operation:because it has to interact with the operating system to perform the operations:
// IMP-NOTE: It is a core module in node js, so we don't need to install it separately:

// we have two-types of (fs-module) methods in (nodejs):
// -> 1 = synchronous-methods:
// -> 2 = asynchronous-methods:
// Synchronous:It means that the code will be executed in a sequence, one after the other:It is blocking code, which means that the code will be executed in a sequential manner:
// Asynchronous:It means that the code will be executed in a non-sequential manner:It is non-blocking code, which means that the code will be executed in a non-sequential manner:

// -> 1 = Synchronous-methods of Fs-Module:(CURD-Operations):

// 1 = Importing the (fs) module:
const fs = require("fs");
// => Read-Operation:
// 2 = Reading the file:with the help of fs-module's synchronous-methods:
// (readFileSync) method is used to read the file:
// V.IMP:It takes two parameters:
// -> 1 = the path of the file:
// -> 2 = the encoding of the file:It is optional and defaults to 'utf8':
// V.IMP-NOTE: The (readFileSync) method of (fs) module returns a (buffer) object or buffer-data by default:and we need to work with string data:so for that we have to convert the buffer-data into string-data:
// So that why we need to provide the (encoding-parameter) to the (readFileSync) method:which is basically the (utf8) encoding-parameter:it gonna convert the buffer data into string data:
// V.IMP-NOTE:There is another way to do that:Instead of providing the (utf8) encoding-parameter to the (readFileSync) method: we can also use the (toString) method to convert the buffer-data into string-data:

// -> first way:this is the way we gonna use:
const data = fs.readFileSync('./data.txt','utf8');
// -> second way:
// const data = fs.readFileSync('./data.txt').toString();
// -> third way:used by the tutor:
// const data = fs.readFileSync('./data.txt');
// const dataString = data.toString();
// console.log(dataString);
// -> fourth way:used on the CN-notes:
// const data = fs.readFileSync(path,{encoding :'utf8'});
console.log("File is read successfully",data);

// -> 2 = Asynchronous-methods of Fs-Module:(CURD-Operations):