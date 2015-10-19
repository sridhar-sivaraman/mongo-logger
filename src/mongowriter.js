'use strict';

var util = require('util');
var LogWriter = require('./logwriter');

// MongoDB Requirements
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
// MongoDB Params
var _mongourl = 'mongodb://localhost:27017/loggerdb';
var _colname = 'mongoLogger';

/**
* Logs to mongodb
*/
var MongoWriter = function() {
};

// Inherit the mongowriter from logwriter
util.inherits(MongoWriter, LogWriter);

/**
 * Opens mongo connection and keep it active until close.
 */
MongoWriter.prototype.open = function() {
  // should be called before setting logger#plant
};

MongoWriter.prototype.onPlant = function() {
  // check if mongo is connected or throw error.
  throw new Error('Mongo connection should be established before planting the mongo log writer');
};

/**
* Mongo write method
*/
MongoWriter.prototype.write = function(level, tag, message) {
  LogWriter.prototype.write.call(this, level, tag, message);
  // here do the mongo save.
  MongoClient.connect(_mongourl, function(err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server: [' + _mongourl + '] Error:', err);
      return;
    }

    var collection = db.collection(_colname);
    var logMsg = { 'level': level, 'tag': tag, 'message': message, 'time': new Date() };
    collection.insert([logMsg], function(insErr, result) {
      if (insErr) {
        console.log('Unable to insert record into collection. Error:', err);
      }
      db.close();
    });
  });
};

MongoWriter.prototype.close = function() {
  // close the db connection here.
};

module.exports = MongoWriter;
