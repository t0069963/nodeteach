'use strict';
///////////�����Ҳլ���///////////////////////
//���J�����Ҳ�http
var http = require('http');

//�ŧi�i�{����
var port = process.env.PORT || 1337;

//////////////////////////////////////////////

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
