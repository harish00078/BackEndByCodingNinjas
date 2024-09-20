// Here we learn about creating HTTP-server in node.js:
// => 1 = first we need to import the (http) module from the nodejs.it is built in library or module in nodejs:
// -> through which we are gonna be able to initiate the communication-protocal on our server application:
// -> with the help of that clients are gonna be able to access and work with our server:
// IMP =  for importing some thing in node.js:we use the (require) function:it is one of way to import something:
// this require function basically return us that module.and for using it we have to store it in the variable
const http = require('http');
// => 2 = second we need to create-server:so for creating server we need to use the http-module:only because of that we are gonna be able to create the server:
// IMP = so creating server using http-module.we have to access its (createServer) method:with the help of that method we are gonna be able to create the simple http-server:
// V.IMP = this method takes one parameter as an argument:and that is a callback function.this callback function is basically a (request-listener):which help us to get requests from the client:and return back responses to them:acc to the requests that we get from the client.
// this argument that will be called every time a request is made to the server. The callback function has two arguments: (req), which represents the incoming HTTP request, and (res), the HTTP-response-object that we can use to send data back to the client.
// V.V.IMP = this createServer method or function basically return us the (instance) of our (server):which we have stored in the (server) variable: so that we can run our server by using its instance:
// Instance of Server:The instance of server in Node.js is an object that represents the server. It has properties and methods that allow you to configure and control the server.

const server = http.createServer((req,res)=>{
    // response has (end) method in it:which basically stop the request response cycle of the paritcular request:and sends response back to the client:acc to its request:
    res.end('hey! every one welcome to my first NodeJs Server')
});

// => 3 = third after creating server. we have to define the (port) for our server.through which basically we are gonna be able to proivde the unique identity to our server and also make it accessible to our clients:
// A port is basically a unique-address which be basically provide to the particular server. Each application has a unique port number assigned to it. When running multiple servers on a single computer, using a different port number for each server allows the client to know which server to communicate with:
const PORT = 8000;

// => 4 = fourth after creating or specifying a port number for server:
// V.IMP = we have to connect it with our server.and start accessing the clients requests through it:so for doing that we need to use the (listen) method from our server's object or instance:after that we are ready to start our server for this particular port number:and start listening for requests which are coming on this port number.
// V.IMP => (listen) = listen() method creates an http server object and then configures it to receive incoming TCP connections on a specific port and IP address so that when clients request a connection to that port and send an http request, the server can receive that http request and process it, sending a response.
// V.IMP = the (listen) method. it takes two arguments:the port number and the callback function:the callback function basically tells us that our server is up and running by showing some text on console-statement which we have given to him :this callback function is bascially listening our Listener:
// after this we did not have to create the console.log statement separately to check that our server is running or not:
server.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});

// here we also write the console.log:statement through which we are gonna be able to know that our server is up and running:
// console.log(`Server is listening at http://localhost:${PORT}`);