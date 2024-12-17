const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

const PORT = 8000;
 server.listen(PORT, () => {
     console.log(`Server listening on Port ${PORT}`);
 })