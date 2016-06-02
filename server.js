var express = require('express');
var api = require('./api');

var app = express();
 
app.use(express.static('public'));

app.get('/api/ingredient/:name', api);
 
app.listen(80);