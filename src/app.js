require('angular');
var $ = jQuery = require('jquery');
require('bootstrap');
require('angular-ui-router');

var AppController = require('./controllers/App');
var MainController = require('./controllers/Main');
var router = require('./routes/route');

var app = angular.module('app', ['ui.router']);

app.controller('AppController', ['$scope', AppController]);
app.controller('MainController', ['$scope', '$http', MainController]);

app.config(router);