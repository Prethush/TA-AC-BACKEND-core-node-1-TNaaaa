let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     console.log(res, req);
// }
// server.listen(5000, () => {
//     console.log('Response on port 5000');
// })

// function handleRequest(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('My first server in NodeJS');
// }

// server.listen(5100, () => {
//     console.log(`Listening on port 5100`);
// })

// function handleRequest(req, res) {
//     console.log(req.headers);
//     res.end(req.headers[`user-agent`]);
// }

// server.listen(5555, () => {
//     console.log(`Listening on port 5555`);
// })

// function handleRequest(req, res) {
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/plain');
//     res.write(req.url);
//     res.write(req.method);
//     res.end();
// }

// server.listen(5566, () => {
//   console.log(`Listening on port 5566`);
// })

// function handleRequest(req, res) {
//     console.log(req.headers);
    
//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify(req.headers));
//      res.end();
     
// }


// server.listen(7000, () => {
//     console.log(`server listening on port 7000`);
//   })

// function handleRequest(req, res) {
    
//     res.statusCode = 202;
//     res.end();
// }
//   server.listen(3333, () => {
//     console.log(`server listening on port 3333`);
//   });

// function handleRequest(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`<h3>Welcome to altcampus</h3>`);
// }


//   server.listen(8000, () => {
//     console.log(`server listening on port 8000`);
//   });


//   function handleRequest(req, res) {
//     res.writeHead(202, {'Contyent-Type': 'text/html'});
//     res.end(`<h3>Welcome to altcampus</h3>`);
// }


//   server.listen(8000, () => {
//     console.log(`server listening on port 8000`);
//   });

// function handleRequest(req, res) {
//     res.setHeader('Content-Type', 'json/application');
//     res.end('{success: true, message: "Welcome to Nodejs"}');
// }

//   server.listen(8888, () => {
//     console.log(`server listening on port 8888`);
//   });

//   function handleRequest(req, res) {
//       console.log(req.method);
//       if(req.method === 'POST' && req.url ==='/') {
//           res.setHeader('Content-Type', 'text/html');
//           res.end(`<h2>posted for first time</h2>`);
//       }
//   }
//   server.listen(5050, () => {
//     console.log(`server listening on port 5050`);
//   });


//   function handleRequest(req, res) {
//     if(req.method === 'GET' && req.url === '/') {
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Prethush');
//     } else if(req.method === 'GET'&& req.url === '/about') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Prethush</h2>');
//     }else if(req.method === 'GET' && req.url === '/users') {
                // res.setHeader('Content-Type', 'text/html');
//         fs.readFile('./index.html', (error, content) => {
//             if(error) {
//                 console.log(error);
//             } else{
//                 res.setHeader('Content-Type', 'text/html');
//                 res.end(content);
//             }
            
//         })
//     } else if(req.method === 'POST' && req.url === '/users') {
//         res.end('Posted for the second time');
//     }else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<h2>Page Not Found ${res.statusCode}</h2>`);
//     }
//   }
// server.listen(2345, () => {
//     console.log(`server listening on port 2345`);
//   });

function handleRequest(req, res) {

    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    console.log(parsedUrl.pathname);
    console.log(req.url);
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parsedUrl.query));

}

  server.listen(10000, () => {
    console.log(`server listening on port 10000`);
  });





  