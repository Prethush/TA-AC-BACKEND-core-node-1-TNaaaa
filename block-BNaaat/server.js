let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/html');
    if(req.method === 'GET' && req.url === '/file') {
        
        fs.readFile('./node.html', (error, content) => {
            if(error) {
                console.log(error);
            } else{
                res.end(content);
            }
        })
    } else if(req.method === 'GET' && req.url === '/stream') {
        fs.createReadStream('./node.html').pipe(res);
    } else {
        res.statusCode = 404;
        res.end('<h1>Page Not found</h1>');
    }
}

server.listen('5555', () => {
    console.log('server is listening on port 5555');
})