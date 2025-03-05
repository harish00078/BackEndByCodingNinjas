console.log("Learning More about Response-object and its (end) method");

// Learning More About the (end) method of (response-object):
// 1 -> First we gonna be learn about that:why and when we can use the (return) method with the (end) method of (response-object).

const http = require("http");

const server = http.createServer((req, res) => {
  // And as we have already learn that we can also return the response to the request with the help of (write) method:but it only returns the response did not stop or end the request to be used further.
  res.write("this is coming from write method: ");

  // response if we have some particular (request-url):
  // IMP:always use (/) forward-slash while defining the urls:
  // V.IMP NOTE: When using the .end() method within any statement or block that has its own scope, we must also include the return statement to prevent further execution of the code or request.
  // -> This ensures that our system does not encounter the ERR_HTTP_HEADERS_SENT error:
  // -> which occurs when a request has already been ended but where we are handling it that statement or block does not stopped:because of that (function) which executes the request or statement and block is not terminated or stop.and that why its gonna jump on another endpoint or method unintentionally.for doing the further execution of the code:

  if (req.url == "/first") {
    return res.end("this is first response");
  }
  // else {
  // default response to default-request:
  //   res.end("Hello World:Its default response");
  // }

  // IMP-NOTE:If we are handling the specific request with the help of if-statement:then we can use the (else-statement) to handle the default request:instead of using the (return) method with the (end) method of (response-object) in the (if) statement:
  // use of return-method basically depend on that how we are handling the (requests):

  // default response to default-request:
  res.end("Hello World:Its default response");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
