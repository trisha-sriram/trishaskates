//var http = require('http');
//var fs = require('fs');
var express = require('express'); //Import ExpressJS node module
var app = express();
app.listen(3000);//Start using app var and create a new server at port 3000
console.log('Server running on port 3000');

/*http.createServer(function (req, res) {
  fs.readFile('homepage.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);*/

