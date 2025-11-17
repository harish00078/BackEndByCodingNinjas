console.log("Learning about the Node.js path module");

// The 'path' module is a core Node.js module used to interact with file and directory paths across different operating systems.
// It helps ensure compatibility, since OSes like Windows and Linux format file paths differently (e.g., '\' vs '/'). 
// With the path module, we can easily construct and manage file paths in a cross-platform way.

// Import required core modules:
const fs = require("fs");
const path = require("path");

// --- Simple Example: Reading a file using a direct (string) path ---
fs.readFile('./src/database/data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error while reading the file (simple path):', err);
    } else {
        console.log('Data from file (simple string path):', data);
    }
});

// --- Path Module Methods Overview ---
//
// 1. path.join(...paths): Joins given path segments using the correct separator for the platform.
// 2. path.resolve(...paths): Resolves a sequence of paths or path segments into an absolute path.it gives us the path from the (home) root-directory:
// 3. path.dirname(p): Returns the directory name of a path.did not include the file-name:
// 4. path.basename(p): Returns the last portion (file name) of a path.
// 5. path.extname(p): Returns the file extension of the path.
// 6. __dirname: Global variable (not a method) — returns the directory name of the current module.

// --- Using path.join() ---
// Combines segments into a correct file path for any OS. Handy for building paths dynamically.
const joinedPath = path.join('src', 'database', 'data.txt');
console.log('Joined path:', joinedPath);

fs.readFile(joinedPath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error while reading the file (join):', err);
    } else {
        console.log('Data from file (path.join):', data);
    }
});

// --- Using path.resolve() ---
// Produces an absolute path from given segments; makes your file access more robust in many scenarios.
const resolvedPath = path.resolve('src', 'database', 'data.txt');
console.log('Resolved path (absolute):', resolvedPath);

fs.readFile(resolvedPath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error while reading the file (resolve):', err);
    } else {
        console.log('Data from file (path.resolve):', data);
    }
});

// --- Extracting extension, dirname, and basename ---
// path.extname(): Get the file extension (including the dot).
const extName = path.extname(resolvedPath);
console.log('File extension:', extName);

// path.dirname(): Get the directory name (excluding the file).
const dirName = path.dirname(resolvedPath);
console.log('Directory name:', dirName);

// path.basename(): Get the file name (including the extension).
const baseName = path.basename(resolvedPath);
console.log('Base name:', baseName);

// --- __dirname Global ---
// __dirname gives you the absolute path to the directory of the current module/file.
// It's useful for constructing absolute paths to resources/files in your project's folder.
console.log('Current directory (__dirname):', __dirname);

/*
Summary:
- Use the path module when handling file paths in Node.js projects.
- It supports cross-platform compatibility, dynamic path creation, and easier code management.
- Prefer path.join or path.resolve over manually concatenating file paths as they take care of OS-specific nuances.
*/