console.log("HELLO WORLD");

const http = require("http");
const fs = require("fs");
let server = http.createServer();
server.on("request", (request, response) => {
  response.writeHead(200, {
    "content-type": "text/html;charset=utf-8",
  });
  response.end("<html><body><h1>Hello Node!!!!</h1></body></html>");
});
server.listen(3000);

fs.readFile("welocome.txt", "utf-8", (err, data) => {
  console.log(data);
});
var generator = require("generate-password");
var passwords = generator.generateMultiple(5, {
  length: 8,
  uppercase: false,
});
console.log(passwords);
