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
 * Mongo write method
 */
MongoWriter.prototype.write = function(level, tag, message) {
  LogWriter.prototype.write.call(this, level, tag, message);
  // here do the mongo save.
  MongoClient.connect(_mongourl, function(err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    } else {
      // Connection successful
      console.log('Connection established to:', _mongourl);
      // Get collection object
      var collection = db.collection(_colname);
      // Build msg object
      var logMsg = { 'level': level, 'tag': tag, 'message': message };
      // Insert
      collection.insert([logMsg], function(insErr, result) {
        if (insErr) {
          console.log('Unable to insert record into collection. Error:', err);
        } else {
          console.log('Inserted %d document(s) into the "' + _colname
                      + '" collection.', result.ops.length);
        }
        // Close connection
        db.close();
        console.log('Connection to:', _mongourl , ' has been closed');
      });
    }
  });
};

module.exports = MongoWriter;
