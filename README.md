# mongo-logger
Mongo Logger Library:

This is a library used for logging into a collection in mongodb.

How to use:

1. Change the params(_mongourl and _collectionname) in src/mongowriter.js to point to your mongourl and collection name.
2. Initialize the logger.
3. Initialize the mongo writer.
4. Open mongo connection for mongo writer.
5. Plant the writer object to the logger (this will throw an error if connection is not established).
6. Use the logger instance for logging.

   Supported methods:
   
   6.1. i(tag, message) - used for info logs
   
   6.2. w(tag, message) - used for warning logs
   
   6.3. e(tag, message) - used for error logs
   
   6.4. t(tag, message) - used for trace logs
   
7. Close the mongo connection.

Note: The src/sample.js has an example of how to use the logger.
