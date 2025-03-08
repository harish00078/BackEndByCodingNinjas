// Here we are creating the server using (Express) framework:
// We need to use the (express-module) to create the server with the help of the Express-framework:

// ->1: Importing the express-module:
const express = require('express');

// ->2: Creating (server) using express:we simply have to call or invoke the (express) function or express-module:and store it in a variable:
// -> and that variable will be our server-instance or server-object:through which we can access all the methods and properties of the server:to interact or work with the server:
const server = express();


// 5: After creating the express-server, we need to define routes or URLs within it.  
// -> These routes allow users to interact with the server by sending requests and receiving responses.  

// => Creating routes in an Express server differs from defining routes in a basic Node.js server.  
// -> Express provides a simpler and more efficient way to create multiple HTTP-routes by using different type of HTTP-methods such as GET, POST, PUT, DELETE, etc.  

// => **IMP-NOTE:** There are mainly two ways to create routes in Express:  
// 1. **Using the server-object** directly.  
// 2. **Using the router-object** to define routes separately.we will get from the express-module: 

// => **IMP:** First Method: Creating routes using the server object directly.  
// -> There are multiple ways to define routes using the server object:
// -> **[1st Way]:** Using HTTP methods (GET, POST, PUT, DELETE, etc.) directly on the server-object.  
// -> **[2nd Way]:** Using the `use` method of the server-object to create middleware-based routes.  
// -> **[3rd Way]:** Using the `route` method to define multiple-handlers for a single-route.  
// -> **[4th Way]:** Using the `all` method to handle all HTTP-methods for a specific-route.  


// => IMP: In Express, we can directly access or use those  HTTP-methods from the server-object:for creating the routes or urls:
// -> These methods correspond to standard HTTP-methods, such as GET, POST, PUT, DELETE, etc.  

// => IMP: Each of these methods takes two arguments:  
// 1. The **route/(URL)** –> define the URL or route on which the request is received.
// 2. The **callback-function/(handler)** –> define the function that is executed when the server receives a request on the specified route:To send a response back to the client or to perform any other operation based on the request.

// => This callback-function takes two arguments:
// 1. The **request-object** –> Contains information about the incoming request.
// 2. The **response-object** –> Used to send a response back to the client.                    


// V.IMP-NOTE: Express simplifies route handling compared to a basic Node.js server.  
// -> **IMP:** Unlike in a standard Node.js server, where we manually check the URL using `if-else` conditions, Express automatically matches incoming-requests to the routes which we have already created:  
// -> V.IMP: Express automatically matches incoming requests to the created-routes or urls and calls the appropriate handler-functions or route handler-function which we have already created and connected to each and  every-route.
// -> **IMP:** This eliminates the need for manual URL checking and enhances code readability and maintainability:


server.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})
server.get('/user',(req,res)=>{
    res.send('<h1>User Page</h1>');
})



// ->3:after creating server:we have to create (port-number) for the server:
// -> so that the server can only listen for the incoming-requests which are coming on this particular port-number:
const PORT = 8000;

// ->4:after creating the port-number:we have to make the server to listen for the incoming-requests on this particular port-number:
// -> for that we have to use the (listen) method of the server-object:
// -> this (listen) method takes two arguments:
// 1st is the (port-number):
// 2nd is the (callback-function):
// -> this callback-function will be executed when the server starts listening for the incoming-requests on a specific port-number:
server.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT}`);
})
