var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Now you see me :D!');
});

server.listen(8080);
