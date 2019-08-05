var http = require('http'); //include modules of js

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello World');
}).listen(8080);