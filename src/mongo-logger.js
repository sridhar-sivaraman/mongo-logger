var log = require('loglevel');
var mupdate = require('./mongo-updater');

function MongoLogger() {};

MongoLogger.prototype.info = function(info_string) {
	log.info(info_string);
	var json = {};
	json["log_type"] = "info";
	json["log_msg"] = info_string;
	mupdate.update(json);
}

module.exports = new MongoLogger();