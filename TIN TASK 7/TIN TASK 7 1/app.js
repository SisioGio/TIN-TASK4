const http = require("http")
const url = require("url")
const port = 3000
const fs = require('fs')
var qs = require('qs');

http.createServer(function(req,res){
  var path = req.url;
  if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("index.html", "UTF-8").pipe(res);
  } else if (req.method == "POST" && path == '/form') {
      var body = "";
      req.on("data", function (chunk) {
          body += chunk;
      });
  }
  req.on("end", function () {
      res.writeHead(200, { "Content-Type": "text/html" })
      if(this.method == "POST") {
          var json = qs.parse(body);
          res.end(`<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <h1>Your name is ${json.name}</h1>
          </body>
          </html>`)
          
      }
  });

 
}).listen(port)