const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'aurora';
const collectionName = 'metrics';
const getMetrics = (callback) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      callback(err, null);
    } else {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      collection.find().toArray((err, metrics) => {
        client.close();
        callback(err, metrics);
      });
    }
  });
};
module.exports = { getMetrics };