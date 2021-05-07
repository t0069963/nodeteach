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
//���}�C���|�� / �h�^��views/index.ejs ex:http://localhost:1337/
router.get('/', function (req, res) {
    res.render("pages/index")
});

//���}�C���|��/about �h�^��views/about.ejs ex:http://localhost:1337/about
router.get('/about', function (req, res) {
    res.render("pages/about")
});


//���}�C���|���H�W���~ �h�Ǧ^views/error ex:http://localhost:1337/*
app.get('*', function (req, res) {
    res.render("pages/error")
});
//��ť���w�ݤf
app.listen(port);
//�b�ù��W�e�{port��
console.log(`server listening on:${port}`);
