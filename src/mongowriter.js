'use strict';

var util = require('util');
var LogWriter = require('./logwriter');

var MongoWriter = function() {
  this._hostname = 'http://localhost/mongoser';
  this._username = 'username';
  this._password = 'password';
  this._dbname = 'db_name';
  this._colname = 'collection_name';
};

util.inherits(MongoWriter, LogWriter);

MongoWriter.prototype.write = function(level, tag, message) {
  LogWriter.prototype.write.call(this, level, tag, message);
  // here do the mongo save.
};

module.exports = MongoWriter;
