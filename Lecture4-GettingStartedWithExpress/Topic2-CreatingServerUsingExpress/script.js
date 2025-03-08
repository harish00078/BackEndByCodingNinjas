// Here we are creating the server using (Express) framework:
// We need to use the (express-module) to create the server with the help of the Express-framework:

// ->1: Importing the express-module:
const express = require('express');

// ->2: Creating (server) using express:we simply have to call or invoke the (express) function or express-module:and store it in a variable:
// -> and that variable will be our server-instance or server-object:through which we can access all the methods and properties of the server:to interact or work with the server:
const server = express();

// ->5:after creating the server:we have to create the routes or urls for the server:
// -> so that user can interact with the server by sending the requests on these routes or urls and get the response from the server:
// -> for that we have to use the (get) method of the server-object:
// -> this (get) method takes two arguments:
// 1st is the (route):
// 2nd is the (callback-function):
// -> this callback-function will be executed when the incoming-request comes on this particular route:
server.get('/',(req,res)=>{
    res.send('Hello World! harish this side:');
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
