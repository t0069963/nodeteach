'use strict';
///////////ず场家舱闽///////////////////////
//更ず场家舱http
var http = require('http');

//秈祘吏挂
var port = process.env.PORT || 1337;

//////////////////////////////////////////////

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
