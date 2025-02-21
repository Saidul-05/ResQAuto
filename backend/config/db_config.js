// backend/config/db_config.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Place your Firebase service account file here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-database.firebaseio.com',
});

module.exports = admin.firestore();
