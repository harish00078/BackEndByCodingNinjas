console.log("Learn about events in Node.js");
// V.IMP NOTE 1:there are multiple-architectures and ways to work with nodejs:using which we basically handle things in nodejs:
// like:(any-action),(http-request),(file-read-write),(file-upload-download),(database-operations),(etc):

// ->1 = Event-Driven Architecture (Most Popular):
// One of the most widely used architectures in Node.js is the event-driven architecture.
// In this approach, we have events and listeners that listen for those events and trigger specific actions when they occur.
// -> 2 =  Events & HTTP Requests
// In Node.js, events primarily refer to HTTP requests.
// Using the event-driven approach, we can listen for different aspects of an HTTP request and execute actions accordingly.
// This is similar to how JavaScript handles events in the browser using event handlers.
// These event handlers are essentially callback functions that execute when an event is triggered.
// -> 3 = V.IMP: Non-Blocking HTTP Handling
// The biggest advantage of the event-driven architecture in Node.js is that it allows us to handle HTTP requests asynchronously (non-blocking way).
// This improves performance and scalability, making Node.js an excellent choice for handling a large number of concurrent requests efficiently.




// V.IMP-NOTE2: In this architecture we can create own events and listen to them in nodejs:
// -> In this architecture we have (EventEmitter) class which is basically used to emit events and then we can listen to those events and perform some action:
// -> (EventEmitter) class is a core module in nodejs:so we don't need to install it separately:we can directly use it by importing it.
