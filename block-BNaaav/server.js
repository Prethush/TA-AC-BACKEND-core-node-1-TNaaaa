let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);


function handleRequest(req, res) {
    console.log(req.url);
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text-html');
        fs.createReadStream('./index.html').pipe(res);
    } else if(req.url === '/about') {
        res.setHeader('Content-Type', 'text-html');
        fs.createReadStream('./about.html').pipe(res);
    } else if(req.url.split(".").pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(`assets/stylesheet${req.url}`).pipe(res);
    } else if(req.url.split(".").pop() === 'jpg' || req.url.split(".").pop() === 'png') {
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream(`assets/images${req.url}`).pipe(res);
    } else if(req.url.split('.').pop() === 'js') {
        res.setHeader('Content-Type', 'text/js');
        fs.createReadStream(`assets/javascript${req.url}`).pipe(res);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
}


server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});