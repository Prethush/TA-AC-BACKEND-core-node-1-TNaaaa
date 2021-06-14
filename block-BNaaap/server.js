var http = require("http");


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method, req.url);
    res.writeHead(201, {'Content-Type': 'text/html'});
    
    res.write('<h1>Hello</h1>');
    res.end("<h1>WElcome</h1>");
}
server.listen(4448, () => {
    console.log("Server is listening on port 4444");
})