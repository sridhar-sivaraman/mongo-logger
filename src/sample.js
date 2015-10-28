'use strict';

// sample consumer for logger
var logger = require('./logger');
var MongoWriter = require('./mongowriter');

// Initialize mongo logger
var mongologger = new MongoWriter();
// this differs if browser or node.
// Open mongo connection
mongologger.open();
// Plant to logger
logger.plant(mongologger);
// Insert the log messages
logger.i('info-tag', 'This is a info message');
logger.w('warn-tag', 'This is a warn message');
logger.e('error-tag', 'This is a error message');
logger.t('trace-tag', 'This is a trace message');
// Close the mongo connection
mongologger.close();
