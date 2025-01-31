console.log("Learn about events in Node.js");

// V.IMP NOTE 1:there are multiple-architectures and ways to work with nodejs:using which we basically handle things in nodejs:
// like:(any-action),(http-request),(file-read-write),(file-upload-download),(database-operations),(etc):

// ->1 = Event-Driven Architecture (Most Popular):because everything in nodejs is based on events:because we have to perform actions everywhere on nodejs to work with it:and we handle those actions or things in nodejs with the help of events:
// -> that's why we use or call nodejs as event-driven architecture:
// IMP:some of the most common events in nodejs are:
// -> listening for http-connections using (listen) method is also the event:
// -> handling http-request and response those are also events and etc:

// One of the most widely used architectures in Node.js is the event-driven architecture.
// In this approach, we have events and listeners that listen for those events and trigger specific actions when they occur.

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
// V.IMP-NOTE2: In this architecture we can create own events and listen to them in nodejs:
// -> In this architecture we have (EventEmitter) class which is basically used to emit-events and then we can listen to those events and perform some action:
// -> (EventEmitter) class is a core module in nodejs:so we don't need to install it separately:we can directly use it by importing it.

// ************************************************************/
// => First: Here we gonna be learn about that we can handle:(http-requests) in nodejs using events or event-driven architecture:
// IMP: Most importantly, we will focus on how to handle HTTP-requests that contain-data.
// -> for that in nodejs:we have some build-in (events) same as we have in browser-javascript:
// -> but they are different to (js):acc to their working or different environment:because in nodejs we have to handle (http-requests) using events:
// V.IMP:basically the use of events: it depends on the (http-method) which are getting with in the request:

// most-common build-in event in nodejs to handle-things which we are getting with in the (http-requests):
         
// -> 1 = data: this event is used to handle (http-data) in nodejs:
// -> 2 = end: this event is used to handle (http-end) in nodejs:
// -> 3 = close: this event is used to handle (http-close) in nodejs:
// -> 4 = error: this event is used to handle (http-error) in nodejs:



