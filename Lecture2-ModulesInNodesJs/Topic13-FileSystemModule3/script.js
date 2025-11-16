/**
 * Demonstration of asynchronous CRUD operations using Node.js File System (fs) module.
 * 
 * Asynchronous methods in the fs module take a callback function as their last argument.
 * These methods are non-blocking, which means Node.js can handle other tasks while waiting for
 * file operations to complete. Prefer them over synchronous (blocking) methods for production.
 */

const fs = require("fs");

// console.log("Learning File System Module in Node.js (Asynchronous Methods)");

// 1. READ a file (fs.readFile)
// - Reads the contents of the file asynchronously.
// - Arguments: file path, encoding, callback(error, data)
fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error while reading the file:", err.message);
    } else {
        console.log("Data from data.txt:");
        console.log(data);
    }
});

// 2. CREATE (write) a new file (fs.writeFile)
// - Overwrites file if it exists, otherwise creates a new one.
// - Arguments: file path, data to write, callback(error)
fs.writeFile("./data2.txt", "name: Harish\nage: 24\n", (err) => {
    if (err) {
        console.error("Error while creating/writing to data2.txt:", err.message);
    } else {
        console.log("data2.txt has been created or overwritten.");

        // Read newly created data2.txt to verify
        fs.readFile("./data2.txt", "utf-8", (readErr, readData) => {
            if (readErr) {
                console.error("Error while reading data2.txt after writing:", readErr.message);
            } else {
                console.log("Contents of data2.txt after creation:");
                console.log(readData);
            }
        });
    }
});

// 3. UPDATE (append) data to a file (fs.appendFile)
// - Appends data to the end of the file.
// - Arguments: file path, data to append, callback(error)
fs.appendFile("./data2.txt", "position: software developer\n", (err) => {
    if (err) {
        console.error("Error while updating/appending to data2.txt:", err.message);
    } else {
        console.log("data2.txt has been updated (appended).");

        // Read updated data2.txt to verify
        fs.readFile("./data2.txt", "utf-8", (readErr, readData) => {
            if (readErr) {
                console.error("Error while reading updated data2.txt:", readErr.message);
            } else {
                console.log("Contents of data2.txt after update:");
                console.log(readData);
            }
        });
    }
});

// 4. DELETE a file (fs.unlink)
// - Deletes the specified file asynchronously.
// - Arguments: file path, callback(error)
fs.unlink("./data2.txt", (err) => {
    if (err) {
        console.error("Error while deleting data2.txt:", err.message);
    } else {
        console.log("data2.txt deleted successfully.");
        // Attempt to read after deletion to show result
        fs.readFile("./data2.txt", "utf-8", (readErr, data) => {
            if (readErr) {
                console.error("data2.txt no longer exists (as expected):", readErr.message);
            } else {
                // Should not reach here
                console.log("Contents of data2.txt after supposed deletion:", data);
            }
        });
    }
});
