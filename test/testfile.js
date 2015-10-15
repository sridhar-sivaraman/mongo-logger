'use strict';

var logger = require('../src/logger');

describe('mongo test', function() {
  it('info test', function() {
		// dummy call
    logger.i('tag', 'Test Msg');
  });
});
