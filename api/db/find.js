var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

module.exports = function(db, collection, query) {

	var promise = new Promise(function(resolve, reject){
		var cursor = db.collection(collection).find(query);
		   cursor.each(function(err, doc) {
		      assert.equal(err, null);
		      db.close();

		      if (doc != null) {
		         resolve(doc);
		      } else {
		         reject('No documents found!');
		      }
		   });
	});

   return promise;
};