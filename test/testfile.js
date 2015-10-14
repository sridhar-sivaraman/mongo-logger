'use strict';

var logger = require('../src/mongo-logger');

describe('mongo test', function() {
	it('info test', function() {
		logger.info('Test Msg');
	});
});