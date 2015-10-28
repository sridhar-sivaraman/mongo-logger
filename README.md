# mongo-logger
Mongo Logger Library:

This is a library used for logging into a collection in mongodb.

How to use:
1. Change the params(_mongourl and _collectionname) in src/mongowriter.js to point to your mongourl and collection name.
2. Initialize the logger.
2. Initialize the mongo writer.
3. Open mongo connection for mongo writer.
4. Plant the writer object to the logger (this will throw an error if connection is not established).
5. Use the logger instance for logging.
   Supported methods:
   5.1) i(tag, message) - used for info logs
   5.2) w(tag, message) - used for warning logs
   5.3) e(tag, message) - used for error logs
   5.4) t(tag, message) - used for trace logs
6. Close the mongo connection.

Note: The src/sample.js has an example of how to use the logger.
