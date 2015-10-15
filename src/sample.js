'use strict';

// sample consumer for logger
var logger = require('./logger');
// this differs if browser or node.
logger.i("test", "Hi there this is me");
logger.w("test", "Hi there this is me");
logger.e("test", "Hi there this is me");
logger.t("test", "Hi there this is me");

/*
var level = require('./loglevel');
console.info(level.info);
console.warn(level.warn);
console.trace(level.trace);
console.error(level.error);
*/
//var loglevel = require('./loglevel');
//var logwriter = require('./logwriter').getInstance();
//logwriter.write(loglevel.info, 'test info tag', 'test info msg');
//logwriter.write(loglevel.warn, 'test warn tag', 'test warn msg');
//logwriter.write(loglevel.error, 'test error tag', 'test error msg');
//logwriter.write(loglevel.trace, 'test trace tag', 'test trace msg');