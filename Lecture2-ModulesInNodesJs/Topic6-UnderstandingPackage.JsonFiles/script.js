const http = require("http");

const server = http.createServer((req, res) => {
    res.end("understanding package.json-file");
});

console.log("understanding package.json-file");

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});