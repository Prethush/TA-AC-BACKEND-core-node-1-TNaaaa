var http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end('welcome');
}
server.listen('4000', () => {
    console.log('server is listening in port 4000');
})