'use strict';
///////////內部模組相關///////////////////////
//載入內部模組http
var http = require('http');

//宣告進程環境
var port = process.env.PORT || 1337;
//////////////////////////////////////////////
//宣告express載入模組express
var express = require('express');
//宣告app使用express模組函數
var app = express();
//使用express.Router()創建一個新物件為router
var router = express.Router();
//設定視圖引擎為ejs *注意如果沒有設定views則預設路徑為/views
app.set('view engine', 'ejs');
//使用預設路徑並回叫router
app.use('/', router);

//////
//網址列路徑為 / 則回傳views/index.ejs ex:http://localhost:1337/
router.get('/', function (req, res) {
    res.render("pages/index")
});

//網址列路徑為/about 則回傳views/about.ejs ex:http://localhost:1337/about
router.get('/about', function (req, res) {
    res.render("pages/about")
});


//網址列路徑為以上之外 則傳回views/error ex:http://localhost:1337/*
app.get('*', function (req, res) {
    res.render("pages/error")
});
//監聽指定端口
app.listen(port);
//在螢幕上呈現port值
console.log(`server listening on:${port}`);
