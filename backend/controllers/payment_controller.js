// backend/controllers/payment_controller.js
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Replace with your Stripe secret key

exports.createCharge = async (req, res) => {
  const { amount, currency, source } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: currency || 'usd',
      source,
    });
    res.status(200).json({ charge });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
