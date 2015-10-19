'use strict';

var loglevel = require('./loglevel');

/**
 * Just uses console log for logging.
 */
var LogWriter = function() {

};

/**
 * Console write method
 */
LogWriter.prototype.write = function(level, tag, message) {
  switch (level) {
    case loglevel.info:
      console.info('INFO::Tag:[' + tag + '] Message:[' + tag + ']');
      break;
    case loglevel.warn:
      console.warn('WARN::Tag:[' + tag + '] Message:[' + tag + ']');
      break;
    case loglevel.error:
      console.error('ERROR::Tag:[' + tag + '] Message:[' + tag + ']');
      break;
    case loglevel.trace:
      console.trace('TRACE::Tag:[' + tag + '] Message:[' + tag + ']');
      break;
    default:
      console.log('LOG::Tag:[' + tag + '] Message:[' + tag + ']');
      break;
  }
};

module.exports = LogWriter;
