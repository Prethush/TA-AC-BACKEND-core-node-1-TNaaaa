var http = require('http');
var url = require('url');
var server = http.createServer(handleRequest);


function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;
    console.log(pathName);
    if(req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text-plain');
        res.end(`Welcome to homepage`);
    } else if(req.method === 'GET' && pathName === '/about') {
        res.setHeader('Content-Type', 'text-html');
        res.end('<h2>this is all about NodeJS</h2>');
    } else if(req.method === 'POST' && pathName === '/about') {
        res.setHeader('Content-Type', 'application.json');
        res.end('{message: this is a post request}');
    } else {
        res.writeHead(404, {'Content-Type': 'text-html'});
        res.end('<h1>Page not fount</h1>');
    }
}
server.listen(5000, () => {
    console.log('Server listening on port 5k');
})