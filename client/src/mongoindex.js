import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('<Eventpull>);

client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  db.collection('<COLLECTION>').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('<COLLECTION>').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();