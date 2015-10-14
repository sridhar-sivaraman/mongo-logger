'use strict';

function MongoAuth() {}

var user = "USER_NAME";
var password = "PASSWORD";
var db_name = "DB_NAME";
var collection = "COLLECTION_NAME";
var authJson = {};

MongoAuth.prototype.getAuthJson = function() {
	if(Object.keys(authJson).length == 0) {
		console.log('Initializing Auth Object');
		authJson["username"] = user;
		authJson["password"] = password;
	}
	return authJson;
}

MongoAuth.prototype.getCollectionName = function() {
	return collection;
}

MongoAuth.prototype.getDatabaseName = function() {
	return db_name;
}

module.exports = new MongoAuth();