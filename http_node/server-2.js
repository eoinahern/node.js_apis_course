var http = require("http");
var fs = require("fs");
var path = require("path");


var hostname = "localhost";
var port = 3000;


var server = http.createServer(function(req, res){

  console.log('request for ' + req.url + ' by method ' + req.method);

  if(req.method == 'GET')
  {
    var fileurl;

    if(req.url == '/')
    {
      fileurl = '/index.html';

    }
    else
      fileurl = req.url;


      console.log(fileurl);

      var filepath = path.resolve('./public' + fileurl);
      var extension = path.extname(filepath);

      console.log(extension);

      if(extension == '.html')
      {
          fs.exists(filepath, function(exists){

            if(!exists)
            {
              res.writeHead(404, {'Content-Type': 'text/html'});
              res.end("<h1> Error 404: " + fileurl + " not found !</h1>" );
              return;
            }

              res.writeHead(200, {'Content-Type': 'text/html'});
              fs.createReadStream(filepath).pipe(res);
        });
      }
      else
      {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("<h1> Error 404: " + fileurl + " not html file!!!!</h1>" );
      }
  }
  else
  {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("<h1> Error 404: " + req.method + " not supported!</h1>" );
  }


});

server.listen(port, hostname, function(){
  console.log('server running at http://${hostname}:${port}');
});
