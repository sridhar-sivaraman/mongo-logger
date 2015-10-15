'use strict';
// sample consumer for logger
var logger = require('./logger');
var LogWriter = require('./logwriter');
// this differs if browser or node.
logger.plant(new LogWriter());
logger.i("test", "Hi there this is me");
