let fs = require("fs");
fs.readFile("./content.md", (error, content) => {
    console.log(content.toString());
});

fs.readFileSync("./content.md", (error, content) => {
    console.log(content);
});

let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");
console.log(buff1.toString());