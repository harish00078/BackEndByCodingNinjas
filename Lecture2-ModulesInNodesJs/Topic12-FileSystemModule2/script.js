console.log("Learning about the File System (fs) module in Node.js");
// The File System (fs) module allows us to interact with the file system: reading, writing, updating, and deleting files.

// Import the built-in 'fs' module
const fs = require("fs");

// --- 1. Creating and Writing to a File (Synchronous) ---

// Use try-catch to handle any errors (e.g., insufficient permissions)
try {
    fs.writeFileSync("data.txt", "name: John Doe\nage: 25\ncity: New York", "utf-8");
    console.log("File 'data.txt' created and data written successfully.");
} catch (error) {
    console.error("Error occurred while creating or writing to the file:", error.message);
}

// --- 2. Reading from the File (Synchronous) ---
try {
    const fileContent = fs.readFileSync("data.txt", "utf-8");
    console.log("Reading from 'data.txt':");
    console.log(fileContent);
} catch (error) {
    console.error("Error occurred while reading the file:", error.message);
}

// --- 3. Appending Data to the File (Synchronous) ---
try {
    fs.appendFileSync("data.txt", "\nname: David Doe\nage: 30\ncity: Los Angeles", "utf-8");
    console.log("Data appended to 'data.txt' successfully.");
    const updatedContent = fs.readFileSync("data.txt", "utf-8");
    console.log("Updated file content:");
    console.log(updatedContent);
} catch (error) {
    console.error("Error occurred while appending to the file:", error.message);
}

// --- 4. Deleting the File (Synchronous) ---
try {
    fs.unlinkSync("data.txt");
    console.log("File 'data.txt' deleted successfully.");
} catch (error) {
    console.error("Error occurred while deleting the file:", error.message);
}

// Try reading the file again to demonstrate it is deleted.
try {
    const afterDeleteContent = fs.readFileSync("data.txt", "utf-8");
    console.log(afterDeleteContent);
} catch (error) {
    console.error("File not found after deletion (as expected):", error.message);
}


// IMP-NOTE:
// We don’t use writeFile/writeFileSync to add more data because they overwrite the
// existing file completely. They replace old content with the new content.
// To *add* data without removing the previous content, we use appendFile/appendFileSync.