// backend/controllers/auth_controller.js
const admin = require('firebase-admin');

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });
    res.status(200).json({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  // In production, validate credentials and issue JWTs.
  // This is a simplified dummy response.
  res.status(200).json({ token: 'dummy-token', message: 'Login successful' });
};
