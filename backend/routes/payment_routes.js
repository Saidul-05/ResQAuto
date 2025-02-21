// backend/routes/payment_routes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment_controller');

router.post('/charge', paymentController.createCharge);

module.exports = router;
