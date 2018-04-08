var express = require('express');
var app = express();

app.get('/', function(req, res){
        res.sendfile(__dirname + '/rectangulo.html');
        });

app.listen(3000);
