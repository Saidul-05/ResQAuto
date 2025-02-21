// backend/routes/mechanic_routes.js
const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanic_controller');
const authMiddleware = require('../middleware/auth_middleware');

router.get('/', authMiddleware, mechanicController.getMechanics);
router.post('/', authMiddleware, mechanicController.createMechanic);

module.exports = router;
