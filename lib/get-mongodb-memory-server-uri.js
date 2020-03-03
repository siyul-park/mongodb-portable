const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoMemoryServer = null;

async function getMongodbMemoryServerUri() {
  if (!mongoMemoryServer) mongoMemoryServer = new MongoMemoryServer({ autoStart: false });
  if (!mongoMemoryServer.isRunning) await mongoMemoryServer.start();

  return mongoMemoryServer.getUri();
}

module.exports = getMongodbMemoryServerUri;
