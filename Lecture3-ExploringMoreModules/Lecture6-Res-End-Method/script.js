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
  // -> This ensures that our system does not encounter the ERR_HTTP_HEADERS_SENT error, which occurs when a request has already been ended, but we attempt to process it further.
  // -> Simply put, we must also terminate the function that handles the execution of the request.
  // -> This prevents the request from proceeding to any additional endpoints or methods unintentionally.
  if (req.url == "/first") {
    return res.end("this is first response");
  }

  // default response to default-request:
  res.end("Hello World:Its default response");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
