const mongodbConnect = require('mongodb/lib/operations/connect');
const connect = require('./connect');

mongodbConnect.connect = connect;

module.exports = require('mongodb');
