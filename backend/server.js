// backend/server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/auth_routes');
const mechanicRoutes = require('./routes/mechanic_routes');
const paymentRoutes = require('./routes/payment_routes');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/mechanics', mechanicRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
