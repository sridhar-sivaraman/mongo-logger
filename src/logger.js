'use strict';
var logger = {};

/**
 * log level info
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.i = function(tag, message) {
  this.__write__("info", tag, message);
}

/**
 * logwriter is used as transaction writer for mongo logging.
 * @param  {LogWriter} logwriter
 */
logger.plant = function(logwriter) {
  this._writer_ = logwriter;
}

logger.__write__ = function(level, tag, message) {
  this._writer_.write(level, tag, message);
}

module.exports = logger;
