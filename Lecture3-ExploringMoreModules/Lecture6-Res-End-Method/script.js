console.log("Learning More about Response-object and its (end) method");

// Learning More About the (end) method of (response-object):
// 1 -> First we gonna be learn about that:how and when we can use the (return) method with the (end) method of (response-object).

const http = require("http");

const server = http.createServer((req, res) => {
  // And as we have already learn that we can also return the response to the request with the help of (write) method:but it only returns the response did not stop or end the request to be used further.
  res.write("this is coming from write method:  ");

  // response if we have some particular-thing in the request-url:
  if (req.url === "first") {
    res.end("this is first response");
  }

  // default response to default-request:
  res.end("Hello World");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});