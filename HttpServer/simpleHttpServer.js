// var http = require('http');
// var server = http.createServer(function onRequest(request, response){
//     response.writeHead(200, {'Content-Type':'text/plain'});
//     response.write('This is a simple Http Server');
//     response.end();
// });
// server.listen(3000);

const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello World!");
});
//100 lines of Code
server.listen(4242, () => {
    console.log('Server is running...');
});