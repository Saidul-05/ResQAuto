// firebase/database/mechanic_data.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.createMechanic = functions.https.onRequest(async (req, res) => {
  const { id, data } = req.body;
  try {
    await admin.firestore().collection('mechanics').doc(id).set(data);
    res.status(200).send({ message: 'Mechanic data created successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
