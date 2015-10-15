'use strict';

var loglevel = require('./loglevel');
var LogWriter = require('./logwriter');
var logwriter = new LogWriter();

var logger = {};

logger._writer_ = logwriter;

/**
 * log level info
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.i = function(tag, message) {
  this.__write__(loglevel.info, tag, message);
};

/**
 * Should use this to plant dynamic logwriter.
 * @param  {LogWriter} writer to be used as transaction layer for log messages
 */
logger.plant = function(writer) {
  // Note : do not remove plant give access to the caller to define logwriter.
  // todo : in future the logger api will accept more than one logwriter.
  this._writer = writer;
};

/**
 * log level warn
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.w = function(tag, message) {
  this.__write__(loglevel.warn, tag, message);
};

/**
 * log level error
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.e = function(tag, message) {
  this.__write__(loglevel.error, tag, message);
};

/**
 * log level trace
 * @param  {string} tag     type to filter messages in mongo (char limit 20)
 * @param  {string} message actual log message in form of string.
 */
logger.t = function(tag, message) {
  this.__write__(loglevel.trace, tag, message);
};


logger.__write__ = function(level, tag, message) {
  this._writer_.write(level, tag, message);
};

module.exports = logger;
