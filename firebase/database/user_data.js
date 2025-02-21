// firebase/database/user_data.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.createUser = functions.https.onRequest(async (req, res) => {
  const { uid, data } = req.body;
  try {
    await admin.firestore().collection('users').doc(uid).set(data);
    res.status(200).send({ message: 'User data created successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
