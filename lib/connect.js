const { connect: originConnect} = require('mongodb/lib/operations/connect');
const getMongodbMemoryServerUri = require('./get-mongodb-memory-server-uri');

async function connect(mongoClient, url, options, callback) {
  return originConnect(mongoClient, url ? url : await getMongodbMemoryServerUri(), options, callback)
}

module.exports = connect;
