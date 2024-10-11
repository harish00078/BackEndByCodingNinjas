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

    // IMP = we also need to use the (return) statement with the (responses) end-method:so that our responses exection functions did not crash with each other:
    // => 1 = it happens because.when we are ending the request.then only the request gets ending not its execution function:so we also have to end its execution function.because we did not want the two execution function of the end-method did not get crash with each other:
    // => 2 = other things is that if after sending  response and ending the request:we wanna do more changes on that request or its response.then we  have to avoid using the return statement on end method:

    return res.end("this is a Product Page");

  } else if (req.url == "/user") {

    return res.end("this is a User Page");

  } else {

    return res.end("this is a Home Page");
    
  }
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is up and running:${PORT}`);
});
