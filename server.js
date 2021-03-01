var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
let ejs = require('ejs');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
app.set("view engine", "ejs");
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/flyer/', function(req, res) {
    res.sendFile(path.join(__dirname + '/flyer/home/index.html'));
});
app.get('/UI.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/UI.js'));
});
app.use('/flyer/', express.static(path.join(__dirname, '/flyer/')))
app.use('/utils/', express.static(path.join(__dirname, '/utils/')))
app.get('*', function(req, res){
    res.status(404)
    res.sendFile(path.join(__dirname + '/utils/404.html'));
  });
//var data = fs.readFileSync('counter');
app.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');