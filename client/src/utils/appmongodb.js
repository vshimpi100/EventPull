const mongoose = require('mongoose');
const MONGO_USERNAME = 'darup67@gmail.com';
const MONGO_PASSWORD = 'Dhruv.Patel93';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'EventPull';
db.createUser(
    {
      user: "darup67",
      pwd: "Dhruv.Patel93",
      roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
    }
  )

  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});