console.log("Learn about events in Node.js");

// V.IMP NOTE 1: There are multiple architectures and ways to work with Node.js, which allow us to handle various types of tasks such as:
// (any-action), (http-request), (file-read-write), (file-upload-download), (database-operations), (etc):

// -> 1 = Event-Driven Architecture (Most Popular):
// Node.js is fundamentally built on an event-driven architecture. This means much of its core functionality is managed using events.
// In Node.js, events signal that something has happened, and *event listeners* (callback functions) handle those events. 
// As a result, Node.js is commonly referred to as an event-driven platform.
// In simpler terms, events notify us when actions occur (such as HTTP requests, file reads, etc.), and we use listeners to respond appropriately.

// Some common events in Node.js include:
// - Receiving new HTTP connections via the `listen()` method (itself an event)
// - Handling HTTP requests/responses
// - Many other system or user events

// Thus, event-driven architecture is one of the most widely used approaches in Node.js applications. 
// In this design, we set up listeners for specific events. When an event occurs, its corresponding callback is triggered—this is also called an event handler.

// -> 2 = Events & HTTP Requests:
// In the context of web development with Node.js, events frequently refer to events emitted during an HTTP request/response cycle.
// Using the event-driven architecture, we can listen for different stages of the HTTP request and execute logic at the right moment. 
// This approach is similar in spirit to the way JavaScript handles browser events using event-handler functions (callbacks).
// In Node.js, HTTP event handlers are also callback functions that execute in response to specific events in the lifecycle of a request.

// -> 3 = Non-Blocking (Asynchronous) HTTP Handling (V.IMP):
// The biggest advantage of using event-driven architecture in Node.js is that it allows us to handle HTTP requests asynchronously in a *non-blocking* manner.
// This enhances performance and scalability, which makes Node.js a great choice for handling many simultaneous connections efficiently.
// The reason: we process events using callback functions, which do not block the event loop while waiting for slow operations (I/O), so Node.js remains highly performant and responsive.

// ************************************************************/
// V.IMP NOTE 2: In event-driven architecture, we can also define and handle our own custom events in Node.js.
// For this, Node.js provides the core `EventEmitter` class. Using this, we can emit (trigger) custom events/manually and set up listeners/callbacks to respond as needed.
// (EventEmitter is a built-in module—you do NOT need to install it separately; simply require it as needed.)

// ************************************************************/
// => First, let's learn how to handle HTTP POST requests (requests which send data in the body) using events in Node.js.
// For this, Node.js gives us built-in events for HTTP requests.
// These events are different from browser events, and are tailored for server-side/server-stream processing.
// V.IMP NOTE: The way we handle events depends on the HTTP method (like GET or POST) received in the incoming request.

// The most commonly used built-in events for handling HTTP requests (especially POST requests, which include data):
// -> 1 = data:     Fired when a new chunk of data is available in the incoming request body.
// -> 2 = end:      Fired when all data has been received and there are no more chunks left.
// -> 3 = close:    Fired when the connection is closed.
// -> 4 = error:    Fired when an error occurs (for example, a network problem or invalid request).

// ************************************************************/
// => In the example below, we create a simple HTTP server that listens for incoming HTTP requests and handles them using the event-driven approach.
// Here, we specifically listen for POST requests, and use the 'data' & 'end' events to process the request body.

// V.IMP NOTE: How do we add event listeners to objects (like requests) in Node.js? 
// We use the `.on()` method, e.g. `req.on("eventName", callback)`.
// The `.on()` method in Node.js attaches an event listener function to an event emitter, so you can listen for specific events and react when they occur.

// => Events commonly used to handle HTTP requests/POST requests:
//  - Attach a listener for the "data" event: Triggered whenever a chunk of data arrives from the client.
//  - Attach a listener for the "end" event: Triggered when the entire HTTP request (all data chunks) has been received.
//    (Important: Always handle 'end' after 'data', to ensure you've received all data before attempting to process it.)
//  - After processing the received data, send a response back to the client. Typically, you use `res.end()` to finish the response.
//    (This is necessary as incoming request data is streamed in asynchronously, not all at once. Buffering it ensures you have the full payload before handling it.)

// V.IMP NOTE: This is why, when handling POST requests, you first use 'data' to collect all the incoming chunks, then use 'end' to process the full data and finally respond back to the client.

// Import the 'http' module to create an HTTP server:
const http = require("http");

// Create an HTTP server:
const server = http.createServer((req, res) => {
  // Check the HTTP method using the 'method' property of the request object:
  if (req.method == "POST") {
    // IMP: When you receive a POST request, you cannot directly access the body data (req.body is undefined for core http servers).
    // Therefore, you must manually assemble the request body by listening for 'data' events and then 'end'.

    console.log("body-data(before-chunk)", req.body); // will be undefined (no framework parsing)
    // Use a variable to accumulate incoming data chunks:
    let body = "";

    // V.IMP: Add event listeners to req using the 'on' method:
    // Listen for 'data' event to receive chunks:
    req.on("data", (chunks) => {
      body += chunks.toString();
    });
    // Listen for 'end' event to know when all chunks have arrived:
    req.on("end", () => {
      // Now, 'body' contains the full, assembled data
      console.log("body-data(after-chunk)", body);
    });
    // After receiving and processing the full data, respond to the client:
    // Use res.end() to finalize and send the response:
    res.end("Data is received successfully");
  } else {
    // Optionally, send a default/global response for non-POST requests:
    res.end("hey there its me:welcome to the nodejs");
  }
});

// Create a PORT (unique address) for the server:
const PORT = 8000;

// Start the server and listen for incoming requests using the 'listen' method (provided by the server object from 'createServer'):
server.listen(PORT, () => {
  console.log(`Server is up and running:${PORT}`);
});
