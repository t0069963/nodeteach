'use strict';
///////////�����Ҳլ���///////////////////////
//���J�����Ҳ�http
var http = require('http');

//�ŧi�i�{����
var port = process.env.PORT || 1337;
//////////////////////////////////////////////
//�ŧiexpress���J�Ҳ�express
var express = require('express');
//�ŧiapp�ϥ�express�Ҳը��
var app = express();
//�ϥ�express.Router()�Ыؤ@�ӷs����router
var router = express.Router();
//�]�w���Ϥ�����ejs *�`�N�p�G�S���]�wviews�h�w�]���|��/views
app.set('view engine', 'ejs');
//�ϥιw�]���|�æ^�srouter
app.use('/', router);

//////

router.get('/', function (req, res) {
    res.render("index")
});


router.get('/about', function (req, res) {
    res.render("about")
});



app.get('*', function (req, res) {
    res.render("error")
});
app.listen(port);
console.log(`server listening on:${port}`);
