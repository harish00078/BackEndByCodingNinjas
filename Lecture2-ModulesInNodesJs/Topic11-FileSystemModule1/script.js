console.log("Learning about the File System (fs) module in Node.js");

// The File System (fs) module enables us to interact with the file system on our computer. 
// With it, we can perform operations like reading, writing, updating, deleting, and moving files and directories.
// V.IMP-Note: File system operations are input/output (I/O) operations, as they require communication with the operating system.
// Important: "fs" is a core/built-in Node.js module, so there's no need to install it separately.

// Node.js provides two types of methods in the fs module:
// 1. Synchronous methods (blocking): Code executes sequentially; each operation must finish before moving to the next.
// 2. Asynchronous methods (non-blocking): Code can run without waiting for file operations to complete.

// --- Synchronous Methods Example (CRUD Operations) ---

// 1. Import the fs module:
const fs = require("fs");

// 2. Read Operation (Synchronous) with the help of (readFileSync) method:
// The readFileSync method reads the contents of a file synchronously.
// It takes two arguments:
//   1. Path to the file.
//   2. (Optional) Encoding format, usually 'utf8' to get a string instead of a Buffer.

// Recommended way (with encoding parameter):
const data = fs.readFileSync('./data.txt', 'utf8');

// Alternative ways:
// const data = fs.readFileSync('./data.txt').toString(); // Convert buffer to string manually.
// const data = fs.readFileSync('./data.txt');            // Returns a Buffer.
// const data = fs.readFileSync(path, { encoding: 'utf8' });

// Output the read data:
console.log("File read successfully:", data);

// --- Next: Asynchronous Methods of the fs Module (CRUD Operations) ---