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
logger.i('test', 'Hi there this is me');
logger.w('test', 'Hi there this is me');
logger.e('test', 'Hi there this is me');
logger.t('test', 'Hi there this is me');
// Close the mongo connection
mongologger.close();
