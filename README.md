# mongo-logger
Mongo Logger Library

1. Change the params(_mongourl and _collectionname) in src/mongowriter.js to use your mongourl and collection name.
2. Initialize the logger.
2. Initialize the mongo writer.
3. Open mongo connection for mongo writer.
4. Plant the writer object to the logger (this will throw an error if connection is not established).
5. Use the logger instance for logging.
   supported methods:
   1. i(tag, message) - used for info logs
   2. w(tag, message) - used for warning logs
   3. e(tag, message) - used for error logs
   4. t(tag, message) - used for trace logs
6. Close the mongo connection.

Note: The src/sample.js has an example of how to use the logger.
