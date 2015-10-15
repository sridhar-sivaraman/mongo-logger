'use strict';

var loglevel = require('./loglevel');
var logwriter = require('./logwriter').getInstance();

var logger = {};

logger._writer_ = logwriter;

/**
 * log level info
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.i = function(tag, message) {
  this.__write__(loglevel.info, tag, message);
}

/**
 * log level warn
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.w = function(tag, message) {
  this.__write__(loglevel.warn, tag, message);
}

/**
 * log level error
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.e = function(tag, message) {
  this.__write__(loglevel.error, tag, message);
}

/**
 * log level trace
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.t = function(tag, message) {
  this.__write__(loglevel.trace, tag, message);
}


logger.__write__ = function(level, tag, message) {
  this._writer_.write(level, tag, message);
}

module.exports = logger;
