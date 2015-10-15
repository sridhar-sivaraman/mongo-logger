'use strict';

var util = require('util');
var LogWriter = require('./logwriter');

var MongoWriter = function() {

};
util.inherits(MongoWriter, LogWriter);

MongoWriter.prototype.write = function(level, tag, message) {
  LogWriter.prototype.write.call(this, level, tag, message);

  // here do the mongo save.
};

module.exports = MongoWriter;
