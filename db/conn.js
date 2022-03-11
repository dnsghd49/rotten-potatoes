// const { MongoClient } = require("mongodb");
// const username = encodeURIComponent("<username>");
// const password = encodeURIComponent("<password>");
// const cluster = "<clusterName>";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";
// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("<dbName>");
//     const ratings = database.collection("<collName>");
//     const cursor = ratings.find();
//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

const { MongoClient, ServerApiVersion } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
    // serverApi: ServerApiVersion.v1 
});

let _db;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        console.log('connected to db')
        if (db)
        {
          _db = db.db("users");
          console.log("Successfully connected to MongoDB."); 
        }
        return callback(err);
           });
    },
   
    getDb: function () {
      return _db;
    },
  };

