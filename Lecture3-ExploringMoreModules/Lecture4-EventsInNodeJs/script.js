console.log("Learn about events in Node.js");

// V.IMP NOTE 1:there are multiple-architectures and ways to work with nodejs:using which we basically handle things in nodejs:
// like:(any-action),(http-request),(file-read-write),(file-upload-download),(database-operations),(etc):

// -> 1 = Event-Driven Architecture:(Most Popular):
// Node.js is built around an event-driven architecture, meaning much of its functionality is based on events.In Node.js, events trigger actions, and event listeners (or functions) handle those actions.
// IMP-NOTE:In more simpler way:In Node.js, events make or let us know that things happen, and event listeners handle them:
// Node.js follows an event-driven architecture, meaning that various actions (such as user interactions, HTTP requests, or system events) occur as events. These events are detected by event listeners, which then execute the appropriate callback functions to handle them.
// ->IMP:This is why Node.js is commonly referred to as an event-driven architecture.

// Important: Some common events in Node.js include:
// Listening for incoming HTTP connections using the listen() method, which itself is an event.
// Handling HTTP requests and responses, which are also events, among others.

// => One of the most widely used architectures in Node.js is the event-driven architecture.
// In this approach, we have events and listeners that listen for those events and trigger specific actions or event-handler function too handle those events when they occur.

// -> 2 =  Events & HTTP Requests:
// In Node.js, events primarily refer to HTTP requests.
// Using the event-driven approach, we can listen for different parts of an HTTP request and execute actions accordingly.
// This is similar to how JavaScript handles events in the browser using event-handlers.
// These event handlers are essentially callback-functions that execute when an event is triggered.

// -> 3 = V.IMP: Non-Blocking HTTP Handling:
// The biggest advantage of the event-driven architecture in Node.js is that it allows us to handle HTTP-Requests asynchronously (non-blocking way).
// This improves performance and scalability, making Node.js an excellent choice for handling a large number of simultaneous requests efficiently.
// V.IMP: We are able to handle HTTP-Requests asynchronously:because we handle event with help of (callback-functions) which are non-blocking in nature:

// ************************************************************/
// V.IMP-NOTE2: In this architecture we can also create our own-events and listen to them in nodejs:
// -> In this architecture we have (EventEmitter) class which is basically used to emit-events and then we can listen to those events and perform some action:
// -> (EventEmitter) class is a core module in nodejs:so we don't need to install it separately:we can directly use it by importing it.

// ************************************************************/
// => First: learn about that how we can handle HTTP (POST-Requests) or we can say that the request which (contain-data) with in them.using events or event-driven architecture in nodejs:
// -> for that we have some build-in (events) in nodejs:same as we have for the other things:
// -> but they are different to (js-events):because of their working and different environment:
// V.IMP-NOTE:basically the use of the events: it depends on the (http-method) which we are getting with in the http-request:

// most-common build-in event in nodejs to handle-request  or post-requests:which are basically getting some-data with in them:
// -> 1 = data: this event is used to handle (http-data) in nodejs:
// -> 2 = end: this event is used to handle (http-end) in nodejs:
// -> 3 = close: this event is used to handle (http-close) in nodejs:
// -> 4 = error: this event is used to handle (http-error) in nodejs:

// ************************************************************/
// => Here we are creating a simple server that listens for incoming HTTP-requests and handles them using the event-driven architecture.
// -> In this example,we are listening for the (post-request) and handling it using the (data),(end) and other-events.

// => Events To Handle HTTP-Requests or HTTP-POST-Requests:
// -> We listen for the "data" event, which is triggered when the server receives chunks of data from the client in a request.
// -> We also listen for the "end" event, which is triggered when the entire HTTP request (or all incoming data) has been received.Or when we wanna response-back to the client and end this request:
// -> Important: The "end" event must be handled after the "data" event because we need to ensure that all data has arrived before processing it.
// -> Very-Important: As we have learned, we use the end() method of the response-object to send the response back to the client and complete the request.
// -> This is necessary because when receiving data from a request (such as an HTTP request or a stream), the data arrives in small chunks asynchronously, rather than all at once. To handle these chunks efficiently, we use the Buffer object.
// V.IMP-NOTE:that's why first we handle request-data through the (data) event and then we handle the response-back or completion of the request through (end) event:

// Import the 'http' module to create an HTTP server:
const http = require('http');

// Create an HTTP server:
const server = http.createServer((req,res)=>{
    
})

// Create an PORT or unique-address for server:
const PORT = 8100;
 
// Start Listening for Request on server:with the help of (listen) method:which provided to us by the (createServer) method's (server-object):
server.listen(PORT,(()=>{
    console.log(`Server is up and running:${PORT}`)
}))

