// firebase/notifications/notification_service.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.sendNotification = functions.https.onRequest(async (req, res) => {
  const { token, title, body } = req.body;
  const message = {
    notification: { title, body },
    token,
  };

  try {
    const response = await admin.messaging().send(message);
    res.status(200).send({ message: 'Notification sent', response });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
