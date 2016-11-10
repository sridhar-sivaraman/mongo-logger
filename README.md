# mongo-logger
## Mongo Logger Library:

This is a logging library used for logging directly into a collection in mongoDB.

### How to use:

1. Change the params(**_mongourl** and **_collectionname**) in [src/mongowriter.js](https://github.com/sridhar-sivaraman/mongo-logger/blob/master/src/mongowriter.js) to point to your mongourl and collection name.
2. Initialize the logger.
3. Initialize the mongowriter.
4. Open mongodb connection for mongowriter.
5. Plant the writer object to the logger (this will throw an error if connection is not established).
6. Use the logger instance for logging.
7. Close the created mongodb connection.

### Supported methods:
   * i(tag, message) - used for info logging
   * w(tag, message) - used for warning logging
   * e(tag, message) - used for error logging
   * t(tag, message) - used for trace logging


**Note:** The [src/sample.js](https://github.com/sridhar-sivaraman/mongo-logger/blob/master/src/sample.js) has an example of how to initialize and use the logger.
