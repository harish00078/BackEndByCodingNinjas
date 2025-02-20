console.log('Learning More about Response-object and its (end) method');

// Learning More About the  (end) method of (response-object):


const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World');
})

const PORT = 8000;

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})