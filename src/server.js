// set up a simple node server
var http = require('http');
var fs = require('fs');

// Send 404 Response
function send404Response(res) {
  res.writeHead(404, {'Content-Type': 'text/plain'})
  res.write('Error 404: Page not found!')
  res.end()
}

// Handle a user request
function onRequest(req, res) {

  if(req.method == "GET" && req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../SpecRunner.html').pipe(res)
  } else {
    send404Response(res);
  }

}

http.createServer(onRequest).listen(8888)
console.log('Server is now listening on PORT 8888...')