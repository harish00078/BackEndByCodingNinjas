// Here we are creating the server using (Express) framework:
// We need to use the (express-module) to create the server with the help of the Express-framework:

// ->1: Importing the express-module:
const express = require('express');

// ->2: Creating (server) using express:we simply have to call or invoke the (express) function or express-module:and store it in a variable:
// -> and that variable will be our server-instance or server-object:through which we can access all the methods and properties of the server:to interact or work with the server:
const server = express();



// ->3:after creating server:we have to create (port-number) for the server:
// -> so that the server can listen for the incoming requests which are coming on the particular port-number: