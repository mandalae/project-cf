var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var config = require('../config/config.json');
var mongoFind = require('./db/find');


module.exports = function(req, res){

	MongoClient.connect(config.db.url, function(err, db) {

	  mongoFind(db, 'videos', {name: req.params.name}).then(function(doc){
	  	res.send(doc);
	  });
	});
};