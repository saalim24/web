const { isUtf8 } = require("buffer");
const fs = require("fs");
const http = require("http");
const { dirname } = require("path");
const { json } = require("stream/consumers");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") res.end("This is overview");
  else if (pathName == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to req on port 8000");
});
