// firebase/auth/auth_functions.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.signup = functions.https.onRequest(async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });
    res.status(200).send({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

exports.login = functions.https.onRequest(async (req, res) => {
  // Login is typically handled client-side via Firebase Auth.
  res.status(200).send({ message: 'Login handled on client side' });
});
