var http = require("http");
const biodata = require("./module-biodata.js");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World !\n");
    res.write(biodata());
    console.log("Server running at http://localhost:8080");
    console.log(biodata());
    res.end();
  })
  .listen(8081);
