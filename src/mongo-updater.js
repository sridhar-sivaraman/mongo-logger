'use strict';

var log = require('loglevel');
var authn = require('./mongo-auth');

function MongoUpdater() {}

MongoUpdater.prototype.update = function(jsonObject) {
	// perform ajax
	var auth = authn.getAuthJson();
	var totalAuthString = JSON.stringify(auth) + '\n' + JSON.stringify(jsonObject);
	console.log('Testing params:')
	console.log('Total auth string for post:\n' + totalAuthString);
	console.log('Collection name:' + authn.getCollectionName());
	console.log('Database Name:' + authn.getDatabaseName());
}

module.exports = new MongoUpdater();