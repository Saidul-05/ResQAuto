// firebase/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Import functions from subdirectories
const authFunctions = require('./auth/auth_functions');
const userData = require('./database/user_data');
const mechanicData = require('./database/mechanic_data');
const notificationService = require('./notifications/notification_service');
const paymentService = require('./payments/payment_service');

exports.auth = functions.https.onRequest(authFunctions);
exports.userData = functions.https.onRequest(userData);
exports.mechanicData = functions.https.onRequest(mechanicData);
exports.notifications = functions.https.onRequest(notificationService);
exports.payments = functions.https.onRequest(paymentService);
