'use strict';

var LogWriter = function(host, dbname, colname) {
  this._dbname = dbname;
  this._colname = colname;
  this._host = host;
}

LogWriter.prototype.write = function(level, tag, message) {
  console.log("LEVEL: " + level + " : " + tag + " : " + message);
}

module.exports = LogWriter;
