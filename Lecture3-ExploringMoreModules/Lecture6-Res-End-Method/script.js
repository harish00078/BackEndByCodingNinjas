console.log('Learning More about Response-object and its (end) method');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World');
})