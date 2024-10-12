// Learn to return HTML as a response:
const http = require("http");
// IMP = here we are importing the (fs) module or libraray:it is a built-in module in nodejs:which known as (file-system) module:using this module we can access or work with files of our system:
const fs = require("fs");
// IMP = here we are creating a server using the http module:we are using the (createServer) method of (http) module:
const server = http.createServer((req, res) => {
  // we need to use the (readFileSync) method of (fs) module:To read or access the file from the system:

  const data = fs.readFileSync("./index.html");
  // IMP: we can also convert our data into (string) format:
  // NOTE-V.V.IMP = here we are using the (toString()) method:it is a method of (buffer) object:which is used to convert the data into (string) format:because we know that the (readFileSync) method of (fs) module returns a (buffer) object by default:and we wanna work with string data:
  // V.IMP = Buffer-object: Is a way to handle raw binary data directly in memory. It's particularly useful when dealing with streams of data like files, network protocols, or other binary formats such as images, videos, or any type of encoded data.
  // explanation (toString()):
  // -> 1 = fs.readFileSync("./index.html") reads the file index.html. But when it reads it, it gets the data in a format called binary (which is how computers understand data).
  // -> 2 = The .toString() part converts that binary data into text (a format we humans can read).
  // -> 3 = Since index.html is a text file (HTML), we need it as text to work with it. That's why we use .toString()—to turn the computer's binary format into readable text format.
  const data1 = fs.readFileSync("./index.html").toString();

  res.end(data1);
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is up and running:${PORT}`);
});
