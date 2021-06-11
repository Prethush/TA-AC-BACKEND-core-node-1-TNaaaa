console.log("Welcome to Node.js");
let os = require("os");


console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());


let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write("Hello World");
buff2.write("Node.js");
console.log(buff1.toString(), buff2.toString());

//non blocking code

console.log("First");
let fs = require("fs");

fs.readFile("./app.js", (error, content) => {
    console.log(content.toString());
});

//blocking code

console.log("First");
for(let i = 0; i < 100000; i++) {

}

console.log("Second");