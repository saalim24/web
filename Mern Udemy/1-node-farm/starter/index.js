const { isUtf8 } = require("buffer");
const fs = require("fs");
const http = require("http");

// console.log("hello brother");
// const txt = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(txt);

// const textout = "good boy";

// fs.writeFileSync("./txt/output.txt", textout);
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("hello From server");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to req on port 8000");
});
