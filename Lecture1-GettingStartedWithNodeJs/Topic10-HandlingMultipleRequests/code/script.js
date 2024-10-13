// here we learn about that how be can handle the multiple requests in nodejs-server:or we can say multiple url-requests:

const http = require("http");

const server = http.createServer((req, res) => {
  // IMP = here the request-argument basically repersents a (http-object) or (http-req-object):which basically have all the things related to request that has been send by the client to us:
  // like:the type of (request) and (url) of the request:
  console.log(req.url);
  // here we are checking our request-urls with the help of (if-conditions):

  if (req.url == "/product") {
    // IMP = we also have other way to append or add content in our response-object:and that is (write) function:but this functon mostly help us to modify our response or we can say add more content in our response:

    res.write("welcome to my server:   ");

    // IMP = we also need to use the (return) statement with the (responses) end-method:so that our responses (execution-functions) did not crash with each other:

    // NOTE => (IMP-points):
    // => 1 = it happens because.when we are ending the request.then only the request gets ending not its execution-function:so we also have to end its execution-function.because we did not want the two execution-function of the end-method did  get crash with each other:
    // (V.V.IMP)=> 2 = other things is that if after sending  response and ending the request:we wanna do more work on that request or its response.then we  have to avoid using the return statement on end method:
    // For-Example:if wanna do some (logging) or other things with those particular request's response:

    // NOTE = (Execution-Functions): An execution context in JavaScript is the environment in which code is executed. There are different kinds of execution contexts, but the two most common are:
    // => 1 = Global Execution Context: This is the default context in which the code that is not inside any function runs. In a browser, it refers to the global-window-object:
    // => 2 = Function Execution Context: Each time a function is called, a new execution context is created for that function:

    return res.end("Products! that we have");
  } else if (req.url == "/user") {
    return res.end("hey! I am new-user ");
  }
  // V.IMP = here if we are ending the request then we have to use the (return) statement with the (end) method:because without it our response-object did not get ending and did  get crash with each other:if we are using it outsite the (conditional-statements):
  // V.V.IMP(NOTE) = Its gonna crashes with the (conditional-statement) responses:if we did not use the (return) statement with the end-method:because (systems) gonna thing about that we are ending or using the end.method twice on the particular request:

  return res.end("welcome! To the Website ");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is up and running:${PORT}`);
});
