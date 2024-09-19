// Learn to return HTML as a response:
const http = require("http");
// IMP = here we are importing the (fs) module or libraray:it is a built-in module in nodejs:which known as (file-system) module:using this module we can access or work with files on our system:
const fs = require("fs");
// IMP = here we are creating a server using the http module:we are using the (createServer) method of (http) module:
const server = http.createServer((req, res) => {
  // we need to use the (readFileSync) method of (fs) module:To read or access the file from the system:
  const data = fs.readFileSync("./index.html");
  res.end(data);
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is up and running:${PORT}`);
});
