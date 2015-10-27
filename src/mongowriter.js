'use strict';

var util = require('util');
var LogWriter = require('./logwriter');

// MongoDB Lib Requirement
var mongodb = require('mongoskin');
// MongoDB Params
var _mongourl = 'mongodb://localhost:27017/loggerdb';
var _collectionname = 'mongoLogger';
var _connection;

/**
* Logs to mongodb
*/
var MongoWriter = function() {};

// Inherit the mongowriter from logwriter
util.inherits(MongoWriter, LogWriter);

/**
 * Opens mongo connection and keep it active until close() is called.
 */
MongoWriter.prototype.open = function() {
  // should be called before setting logger#plant
  _connection = mongodb.db(_mongourl, { 'native_parser': true });
  console.log('Connection created successfully');
};

/**
 * Verifies the mongo connection is available
 */
MongoWriter.prototype.onPlant = function() {
  if (!_connection) {
    // check if mongo is connected or throw error.
    throw new Error('Mongo connection should be established before planting the mongo log writer');
  }
};

/**
 * Inserts data to the mongo db
 */
MongoWriter.prototype.write = function(level, tag, message) {
  LogWriter.prototype.write.call(this, level, tag, message);
  // here do the mongo save.
  var logMsg = { 'level': level, 'tag': tag, 'message': message, 'time': new Date() };
  _connection.collection(_collectionname).insert(logMsg, function(err, result) {
    if (err) console.log('Unable to insert record into collection. Error:', err);
  });
};

/**
 * Closes the established database connection
 */
MongoWriter.prototype.close = function() {
  // Check for undefined/null values before closing the connection
  if (_connection) {
    // Wait for a couple of seconds before closing connection.
    // This was introduced to avoid the connection closed error during insert.
    // Since, insert takes a few milliseconds before which the close is called.
    setTimeout(function() {
      _connection.close();
      console.log('Connection closed successfully');
    }, 2000);
  }
};

module.exports = MongoWriter;
