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

      req.on('end', () => {

        console.log(body)

        fs.writeFile('message.txt', body, err => {
            if(err){
                res.statusCode = 404;
                res.end();
            } else{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                 res.end();
            }
            
            });
      })
 
  }



 
}).listen(port)