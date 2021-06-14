var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers, req.method, req.url);
}

server.listen(3000, () => {
    console.log("Server listening on port 3000");
})