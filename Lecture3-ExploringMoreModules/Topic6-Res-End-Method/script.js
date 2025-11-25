console.log("Learning More about Response-object and its (end) method");

// ==================================================================
// This script demonstrates how to use the response object's .end() method
// in Node.js to finalize the HTTP response, and discusses the importance
// of using 'return' with 'res.end()' to prevent further code from executing.
// ==================================================================

// Import the http module to create an HTTP server
const http = require("http");

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Use res.write() to send a partial response to the client.
  // Note: res.write() only sends data but DOES NOT end the response.
  // More data can be written or further handlers can run after this.
  res.write("this is coming from write method: ");

  // --------------------------------------------------------------
  // Handling a specific endpoint using if statement
  // Always use a leading forward slash in the URL (e.g., "/first")
  // --------------------------------------------------------------
  if (req.url == "/first") {
    // To ensure no further code runs after ending the response,
    // use 'return' with 'res.end()'. This prevents issues like
    // ERR_HTTP_HEADERS_SENT, which occurs if you accidentally attempt
    // to send another response after the response has already ended.
    return res.end("this is first response");
  }

  // ------------------------------------------------------------
  // Handling default response for all other URLs
  // If above condition not met, code execution continues here.
  // res.end() finishes the HTTP response and sends any final data.
  // ------------------------------------------------------------
  res.end("Hello World:Its default response");
});

// Define the port number for the server to listen on
const PORT = 8000;

// Start the server and listen for incoming requests
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
