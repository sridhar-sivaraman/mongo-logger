'use strict';

var loglevel = require('./loglevel');

var LogWriter = (function () {
	var instance;
	function createInstance() {
		function mongowrite(level, tag, message) {
			switch(level) {
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
			
			// Mongo Write Operation
			
		}
		return {
			_dbname : "mongodb_name",
			_colname : "collection_name",
			_host : "http://localhost/mongoser",
			_username : "username",
			_password : "password",
			write: mongowrite
		};
	}
	
	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

module.exports = LogWriter;