const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 1;
setTimeout(() => console.log("time 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  setTimeout(() => console.log("time 1 finished"), 0);
  setImmediate(() => console.log("immediate 1 finished"), 3000);

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});
console.log("hello from top");
