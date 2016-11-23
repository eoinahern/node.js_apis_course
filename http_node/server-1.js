var http = require("http");


var hostname = "localhost";
var port = 3000;


var server = http.createServer(function(req, res){

  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h1>hello world</h1>");
});

server.listen(port, hostname, function(){
  console.log('server running at http://${hostname}:${port}');
});