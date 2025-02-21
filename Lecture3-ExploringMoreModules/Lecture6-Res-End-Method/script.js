console.log("Learning More about Response-object and its (end) method");

// Learning More About the (end) method of (response-object):
// 1 -> First we gonna be learn about that:how and when we can use the (return) method with the (end) method of (response-object).

const http = require("http");

const server = http.createServer((req, res) => {
  // And as we have already learn that we can also return the response to the request with the help of (write) method:but it only returns the response did not stop or end the request to be used further.
  res.write("this is coming from write method: ");

  // response if we have some particular (request-url):
  // IMP:always use (/) forward-slash while defining the urls:
  // V.IMP-NOTE: when we are using the (end) method with in any of the statement or any thing which has its own-scope:then we also have to use the (return) method with in it to stop the further execution of the code or the request:
  // -> so that our system does not give the error of (ERR_HTTP_HEADERS_SENT) error.which means that our request it ended but we are still trying to use it further:
  // -> In more simpler-way is that we also have to end the (function):which is basically handling the execution of our-request:so while ending the request we also have to end the function which is handling the execution of the request:
  // -> so that our request does not go to the further or any end point or method of the request:
  if (req.url =="/first") {
    return res.end("this is first response");
  }

  // default response to default-request:
  res.end("Hello World:Its default response");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});